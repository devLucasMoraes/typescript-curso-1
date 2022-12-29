import { Negociacao } from "../models/Negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('[data-data]')
        this.inputQuantidade = document.querySelector('[data-quantidade]')
        this.inputValor = document.querySelector('[data-valor]')
    }

    adiciona() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(date, quantidade, valor);

        console.log(negociacao)
    }
}
