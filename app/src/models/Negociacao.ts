import { Model } from "../interfaces/Model.js";

export class Negociacao implements Model<Negociacao>{
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    public toString(): string {
        return `
            Data: ${this.data.getDate()} / ${this.data.getMonth()} / ${this.data.getFullYear()}
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate()
                && this.data.getMonth() == negociacao.data.getMonth()
                && this.data.getFullYear() == negociacao.data.getFullYear();
    }

    public static criaNegociacao(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        const negociacao = new Negociacao(date, quantidade, valor);
        return negociacao;
    }
    
}