import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title:string = "Bem vindo";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // alert("foi alterado com sucesso")
  }

}
