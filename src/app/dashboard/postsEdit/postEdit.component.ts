import { UserService } from './../../services/user/user.service'
import { NotifierService } from 'angular-notifier'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { PeopleService } from './../../services/people/people.service'
import { Person } from 'src/app/models/person.model'
import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import * as moment from 'moment'

@Component({
  selector: 'app-postEdit',
  templateUrl: './postEdit.component.html',
  styleUrls: ['./postEdit.component.scss'],
})
export class PostEditComponent implements OnInit {
  name = ''
  surname = ''
  bio = ''
  profession = ''
  photo = ''
  birthDate = ''
  id = ''
  editForm: FormGroup
  isSend = false
  person: Person = new Person()

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private fb: FormBuilder,
    private notifierService: NotifierService,
    private userService: UserService,
    private activeRoute: ActivatedRoute,
  ) {
    this.editForm = fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      profession: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      photo: ['', [Validators.required]],
    })
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((param) => {
      this.id = param.id
      if (this.id !== undefined){
        console.log(this.id)
        this.injectData('')
      }
    })
  }
  get f() {
    return this.editForm.controls
  }
  injectData(id:string){
    this.peopleService.getPersonaje(this.id).subscribe(
      (data) => {
        console.log(data)
        this.person = data
        this.name = data.name

      }
    )
  }

  updatePersonaje() {
    this.isSend = true

    if (this.editForm.invalid) {
      console.log('El formulario NO es válido')
      return
    }
    console.log('El formulario es válido')
    this.activeRoute.params.subscribe((route) => {
      if (route.id == null) {
        const personaje: Person = new Person()
        personaje.name = this.f.name.value
        personaje.surname = this.f.surname.value
        personaje.bio = this.f.bio.value
        personaje.profession = this.f.profession.value
        personaje.photo = this.f.photo.value
        personaje.birthDate = this.f.birthDate.value
        console.log(personaje.name)
        this.peopleService.savePersonaje(personaje).subscribe(
          (data) => {
            console.log('El personaje ha sido añadido al listado', data)
          },
          (error) => {
            console.log('Error:', error)
          },
        )
        //this.router.navigate(['/dashboard'])
      } else {

        const personaje: Person = new Person()
        personaje._id= this.id
        personaje.name = this.f.name.value
        personaje.surname = this.f.surname.value
        personaje.bio = this.f.bio.value
        personaje.profession = this.f.profession.value
        personaje.photo = this.f.photo.value
        personaje.birthDate = this.f.birthDate.value
        this.peopleService.updatePersonaje(personaje).subscribe(
          (data) => {
            console.log('El personaje ha sido actualizado correctamente', data)
          },
          (error) => {
            console.log('Error:', error)
          },
        )
      }
      this.router.navigate(['/dashboard'])
    })
  }

  updated() {
    this.router.navigate(['/dashboard'])
  }
  formatDate(){}
}
