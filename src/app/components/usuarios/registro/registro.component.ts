import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroupDirective, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})



export class RegistroComponent implements OnInit {

  private passwd: string;
  private repeatPasswd: string;


  constructor(private formBuilder: FormBuilder) {

  }



  hide = true;
  get passwordInput() { return this.registerForm.get('passwd'); }
  hidePR = true;
  get passwordRepeatInput() { return this.registerForm.get('passwdRepeat'); }
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

    passwdFormControl = new FormControl('', [ // el nombre del form control se lo doy aca
      Validators.required
    ]);

    repeatPasswdFormControl = new FormControl('', [ // el nombre del form control se lo doy aca
      Validators.required,

    ]);

     passwdForm = this.formBuilder.group({// deben ser igual a los de la interfaz
      passwd: this.passwdFormControl,
      passwdRepeat: this.repeatPasswdFormControl
      });

  registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
    id: [],
    name: this.nameFormControl,
    apellido: this.apellidoFormControl,
    email: this.emailFormControl,
    passwdGroup: this.passwdForm
    });





  ngOnInit(): void {
  }

  public register(): void{
    console.log('registro!!');
    console.log(this.registerForm.value);
    console.log(this.passwdForm.value);

  }

  public getRepeatPasswd(): string {
    return this.repeatPasswd;
  }

  public setRepeatPasswd(repeatPasswd: string): void {

    this.repeatPasswd=repeatPasswd;
  }

  public getPasswd(): string {
    return this.passwd;
  }

  public setPasswd(passwd: string): void {

    this.passwd=passwd;
  }



}
