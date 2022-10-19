import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

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
  
  BuscaData() {
    this.dtsistema = new Date();
    this.semana = this.dtsistema.getDay(); //dia da semana
    this.dia = this.dtsistema.getDate(); //dia do mês
    this.mes = this.dtsistema.getMonth(); //mês (a contagem inicia em Janeiro como mês 0)
    this.ano = this.dtsistema.getYear(); //ano (tem que somar 1900 na data)
    this.semana_atual = this.vetor_semana[this.semana];
    this.mes_atual = this.vetor_mes[this.mes];
    this.ano_atual = this.ano + 1900;
  }
}
