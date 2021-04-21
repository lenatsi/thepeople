import { Person } from './../../models/person.model';
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
  constructor(private router: Router, private peopleService: PeopleService) {
    this.loadData()
  }

  ngOnInit() {
  }
  addNew(){
    this.router.navigate(["dashboard/postsedit"])
  }
  editPerson(id: string){
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
      },
      (error) => {
        console.log('Error:', error)
      },

    )
    this.router.navigate(['dashboard'])
  }
}
