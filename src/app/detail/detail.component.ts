import { PeopleService } from './../services/people/people.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 name = ''
 surname = ''
 bio = ''
 birthdate = ''
 photo = ''
 job = ''
 id = ''
  constructor(private activeRoute: ActivatedRoute, private peopleService: PeopleService) {}


  ngOnInit() {
    this.activeRoute.params.subscribe( parm => {
      console.log(parm.id)
      this.id = parm.id

       //Llamada API
    })
    this.getPersonaje()

  }
  getPersonaje(){
    const id = this.id
    this.peopleService.getPersonaje(id).subscribe((data) => {
      console.log(data)
      this.name = data.name
      this.surname = data.surname
      this.bio = data.bio
      this.birthdate = data.birthDate
      this.photo = data.photo
      this.job = data.profession
    })
    this.peopleService.getPersonaje(id).subscribe(
      (data) => {
        console.log(data.name)
      },
      (error) => {
        console.log('Error:', error)
      },
    )
  }

}
