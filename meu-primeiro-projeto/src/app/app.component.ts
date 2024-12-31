import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <ng-template [ngIf]="getDados">
    {{getDados.name}}
    {{getDados.idade}}
  </ng-template> 
  <app-output (enviarDados)="setDados($event)"></app-output> -->
  <app-food-add></app-food-add>
  <app-food-list></app-food-list>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  constructor(){

  }

  public getDados: {name: string, idade: number} | undefined;

  public addValue: number = 10;

  public destruir:boolean = true;

  ngOnInit(): void {
    // setTimeout(()=> {console.log(1)}, 5000)
  }

  public setDados(event: {name: string, idade: number}): void{
    this.getDados = event;
  }

}
