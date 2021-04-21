import { Login } from './../models/login.model'
import { UserService } from './../services/user/user.service'
import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NotifierService } from 'angular-notifier'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = faUser
  mForm: FormGroup
  isSend = false


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notifierService: NotifierService,
    private userService: UserService,
  ) {
    this.mForm = fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$'),
        ],
      ],
    })
  }
  ngOnInit() {}
  get f() {
    return this.mForm.controls
  }

  onSave() {
    this.isSend = true
    //console.log('Guardar!!', this.mForm)

    if (this.mForm.invalid) {
      console.error('El formulario NO es válido')
      return
    }

    console.log('El formulario es válido')
    // Atacar a API
    //hacer dos servicios: user, people
    //Llamar al servicio de login y en la respuesta guardar en localStorage el token y redirigir al dashboard
    const login: Login = new Login()
    login.email = this.f.email.value
    login.password = this.f.password.value
    this.userService.login(login).subscribe(
      (data) => {
        //console.log(data.access_token)
        //guardar token
        this.notifierService.notify('success', 'Datos actualizados')
        localStorage.setItem('token', data.access_token)
        this.router.navigate(['/dashboard'])
      },
      (error) => {
        console.log('Error:', error)
      },
    )

  }
  signup() {
    this.router.navigate(['/register'])
  }
}
