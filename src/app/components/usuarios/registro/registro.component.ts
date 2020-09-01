import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {

  }

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20)
  ]);
  apellidoFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]);

  emailFormControl = new FormControl('', [ // el nombre del form control se lo doy aca
      Validators.required,
      Validators.email
    ]);


  registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
    id: [],
    name: this.nameFormControl,
    apellido: this.apellidoFormControl,
    email: this.emailFormControl
    });




  ngOnInit(): void {
  }

  public register(): void{
    console.log('registro!!');
    console.log(this.registerForm.value);

  }
}
