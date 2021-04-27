import { Person } from 'src/app/models/person.model';
import { PeopleService } from './../../services/people/people.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personajes:Array<Person> = []
  filtro =""
  dateStartSearch: string = ''
  dateEndSearch: string = ''
  filter = ''
  person?: Person
  constructor(private router: Router, private peopleService: PeopleService, ) {
    this.loadData()
  }

  ngOnInit() {
  }
  addNew(){
    this.router.navigate(["dashboard/postsedit"])
  }
  editPerson(id: string){
   /* console.log(id)
        this.peopleService.getPersonaje(id).subscribe(
          (data) => {
            console.log(data)
            this.person = data
          }
        ) */
    this.router.navigate(["dashboard/postsedit/"+id+"/edit"])
  }
  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
  loadData() {

    this.peopleService.getPersonajes(this.filter, '', '').subscribe(
      (data: Person[]) => {
        this.personajes = data
        console.log(data)
      },
      (error) => {
        console.log('Error:', error)
      },
    )
  }
  deletePerson(id: string){
    this.peopleService.deletePersonaje(id).subscribe(
      (data) => {
        console.log('El personaje ha sido borrado', data)
        this.router.navigate(['dashboard'])
      },
      (error) => {
        console.log('Error:', error)
      },

    )

  }
}
