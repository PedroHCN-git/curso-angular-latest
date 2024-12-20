import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
  
  public nome: String = "Pedro";
  public checkeDisable: boolean = true;
  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public moveMouseTest(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
