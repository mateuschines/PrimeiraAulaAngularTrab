import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.component.html',
  styleUrls: ['./sucesso.component.css']
})
export class SucessoComponent implements OnInit {

  private n=7;
  private xs=[1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {
  }

  tab(valor){
    this.n=valor;//n estou mudando o valor do atributo, a variavel altera altomaticamente
  }

}
