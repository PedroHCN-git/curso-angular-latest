import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-diretivas-estruturais></app-diretivas-estruturais>
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
