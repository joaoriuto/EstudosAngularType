import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = "http://lorempixel.com.br/400/200/nature/";

  valorAtual: string = "";
  valorSalvo: any = "";

  isMouseOver: boolean = false;

  @Input() nomeCurso: string ='Angular';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return 1;
  }

  constructor() { }

  ngOnInit() {

  }

  botaoClicado(){
    alert();
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = this.valorAtual;
  }

  onMouseOver(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMouseOut() {

  }


}
