import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

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

}
