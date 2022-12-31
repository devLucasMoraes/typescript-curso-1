import { domInjector } from "../decorators/domInjector.js";
import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesService } from "../services/NegociacoesService.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";

export class NegociacaoController {
    @domInjector('[data-data]')
    private inputData: HTMLInputElement;
    @domInjector('[data-quantidade]')
    private inputQuantidade: HTMLInputElement;
    @domInjector('[data-valor]')
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView('[data-negociacoesView]');
    private mensagemView: MensagemView = new MensagemView('[data-mensagem-view]');
    private NegociacoesService = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    
    public adiciona(): void {
        const negociacao = Negociacao.criaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas.');
            return;
        }
        console.log(negociacao.toString())
        console.log(this.negociacoes.toString())
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }

    public importarDados() {
            this.NegociacoesService
                .obterNegociacoesDoDia()
                .then(negociacoesDeHoje => {
                    for(let negociacao of negociacoesDeHoje) {
                        this.negociacoes.adiciona(negociacao);
                    }
                    this.negociacoesView.update(this.negociacoes);
                })
    }
    
    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }



    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

    private limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
