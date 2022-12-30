import { escapar } from "../decorators/escapar.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = <HTMLElement> elemento
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
            
        }
    }

    protected abstract template(model: T): string;

    @inspect()
    @logarTempoDeExecucao(true)
    @escapar
    public update(model: T): void {
        let template = this.template(model)
        this.elemento.innerHTML = template;
    }
}