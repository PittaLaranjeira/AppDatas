import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  //variabeis globais
  dtsistema
  dia
  semana
  mes
  ano
  semana_atual
  mes_atual
  ano_atual
  vetor_semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
  vetor_mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  
  //função para Buscar a Data do Sistema e manipular atráves das variáveis globais criadas acima
  BuscaData() {
    this.dtsistema = new Date(); //data atual do sistema (Dia_da_Semana Mês Dia_mês Ano Horário Fuso-Horário)
    this.semana = this.dtsistema.getDay(); //dia da semana (Dom à Sáb, inicia em Domingo como dia 0)
    this.dia = this.dtsistema.getDate(); //dia do mês (1 a 30/31)
    this.mes = this.dtsistema.getMonth(); //mês (Jan a Dez, inicia em Janeiro como mês 0)
    this.ano = this.dtsistema.getYear(); //ano (tem que somar 1900 na data)
    this.semana_atual = this.vetor_semana[this.semana]; //atribui a semana_atual com auxílio do vetor_semana
    this.mes_atual = this.vetor_mes[this.mes]; //atribui o mes_atual com auxílio do vetor_mes
    this.ano_atual = this.ano + 1900; // por conta do bug do milênio, apagaram 1900 anos das datas
  }
}
