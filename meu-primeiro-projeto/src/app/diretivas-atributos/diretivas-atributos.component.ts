import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public list:Array<{nome: String}> = [];
  public valorNg: String = "";
  public height:string = "20px"
  public valor: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.height == "20px")
        this.height = "50px"
      else
        this.height = "20px"
    }, 2000);
  }

  public switchOnOf(): void{
    if(this.valor)
      this.valor = false;
    else
      this.valor = true;
  }

  public addName(): void{
    this.list.push({nome: this.valorNg});
  }

}
