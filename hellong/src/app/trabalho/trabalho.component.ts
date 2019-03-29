import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.css']
})
export class TrabalhoComponent implements OnInit {

  private n;
  private xs=["cinza","preto","branco","amarelo","rosa","roxo","vemelho","azul"];

  constructor() { }

  ngOnInit() {
  }

  op(vare){
    this.n=vare;//n estou mudando o valor do atributo, a variavel altera altomaticamente
  }

}


