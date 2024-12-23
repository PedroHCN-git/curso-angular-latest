import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-diretivas-atributos>
    <hr>
    <h1>Denner é insuportável e burro</h1>
  </app-diretivas-atributos>
  <app-new-component></app-new-component>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  constructor(){

  }

  public destruir:boolean = true;

  ngOnInit(): void {
    // setTimeout(()=> {console.log(1)}, 5000)
  }

}
