import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  public list: Array<{name: string, idade: number}> = [
    {name: "Pedro Corradini", idade: 20},
    {name: "Patricia Corradini", idade: 48},
    {name: "Leandro Pereira", idade: 46}
  ]

  @Output() public enviarDados = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }

}
