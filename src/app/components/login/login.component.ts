import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  ingresar() {
    const usuario = this.form.value.usuario
    const password = this.form.value.password

    if(usuario == 'admin' && password == 'admin') {
      //Redirecciona al Dashboard

    } else {
      //Mensaje de error
      this.error();
    }
  }

  error() {
    this._snackBar.open('Usuario o contraseña ingresado son invalidos','', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }





}
