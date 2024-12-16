import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="Olá Mundo"></app-title>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  ngOnInit(): void {
    setTimeout(()=> {console.log(1)}, 5000)
  }

  ngDoCheck(): void {
    
  }

  ngAfterContentInit(): void {
    
  }

  ngAfterContentChecked(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

  ngAfterViewChecked(): void {
    
  }
}
