import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faUser, } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  user = faUser
  mForm: FormGroup
  isSend = false

  constructor(private router: Router, private fb: FormBuilder, private notifierService: NotifierService) {
  this.mForm = fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$")]]
  })
}
  ngOnInit() {
  }
  get f() {
    return this.mForm.controls
  }

  onSave() {
    this.isSend = true
    console.log("Guardar!!", this.mForm);

    if(this.mForm.invalid) {
      console.error("El formulario NO es válido");
      return
    }

    console.log("El formulario es válido");
    // Atacar a API

    this.notifierService.notify('success', "Datos actualizados")

  }
  signup() {
    this.router.navigate(["/register"])
  }

}

