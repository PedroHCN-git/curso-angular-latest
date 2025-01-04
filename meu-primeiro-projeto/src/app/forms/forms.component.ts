import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listaVagas: Array<{vaga: string}> = [
    {vaga: "Infraestrutura de TI"},
    {vaga: "Desenvolvimento"},
    {vaga: "Seguranda da Informação"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm){
    console.log(form);
  }

}
