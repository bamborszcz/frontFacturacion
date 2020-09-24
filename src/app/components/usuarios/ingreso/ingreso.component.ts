import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) { }

  hidePR = true;
  get passwordRepeatInput() { return this.registerForm.get('quantity'); }

  registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
    id: [],
    name: [''],
    price: [],
    quantity: []
    });

  ngOnInit(): void {
  }

  public login(): void{
    console.log('login!!');

  }
}
