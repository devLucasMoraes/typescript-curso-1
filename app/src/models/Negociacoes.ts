import { Imprimivel } from "../utils/Imprimivel.js";
import { Negociacao } from "./Negociacao.js";

export class Negociacoes extends Imprimivel{
    private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    public toString(): string {
        return JSON.stringify(this.negociacoes, null, 2)
    }
}