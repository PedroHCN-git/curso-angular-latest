import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public list: Array<{nome: String, idade: number}> = [
    {nome: "Pedro Corradini", idade: 20},
    {nome: "José Nunes", idade: 74},
    {nome: "Leandro Pereira", idade: 47}
  ];

  public name: String = "Pedro";
  public value:boolean = false;
  public twainNumbers: Array<{n: number}> = [{n: 1}, {n:2}, {n:5}, {n:8}, {n:3}];
  public conditionClick = true;
  public condition: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.condition)
      this.condition = false;
      else{
        this.condition = true;
      }
    }, 2000)
  }

  public onClick(): void {
    if(this.conditionClick)
      this.conditionClick = false;
    else{
      this.conditionClick = true;
    }
  }

  public addOnClick(): void{
    this.list.push({nome: "não sei", idade: 10});
  }

  public onClickListEvent(n: number){
    this.list.splice(n, 1);
  }

  public verifyTwain(num: number): void {
    if(this.twainNumbers[num].n % 2 == 0){
      this.value = true;
    }
    else{
      this.value = false;
    }
  }

  public changeName(event: MouseEvent, name: String): void{
    this.name = name;
  }
}
