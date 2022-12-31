import { NegociacoesDoDia } from "../interfaces/NegociacoesDoDia.js"
import { Negociacao } from "../models/Negociacao.js"


export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: Array<NegociacoesDoDia>) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante)
                })
            })
    }
}