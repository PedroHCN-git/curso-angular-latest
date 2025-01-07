import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  public cadastroForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public submiteForm(){
    if(this.cadastroForm.valid){
      console.log(this.cadastroForm.value);
      console.log(this.cadastroForm.value.lastName);
    }
  }

}
