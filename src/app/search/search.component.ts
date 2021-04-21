import { PeopleService } from './../services/people/people.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import * as moment from 'moment'
import { Person } from '../models/person.model'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  name: string = ''
  surname: string = ''
  nameSearch: string = ''
  dateStartSearch: string = ''
  dateEndSearch: string = ''
  filtro = ''
  personajes: Array<Person> = []
  filter:string = ''

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService,
  ) {}

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((value) => {
      if (value.name != undefined) {
        this.filter = value.name
      }
      this.filtro = value.name
      console.log(value)
      console.log(this.filtro)

    })
    this.loadData()
  }

  onSearchChange(searchValue: any) {
    this.filtro = searchValue.target.value
    const params = this.filtro
    console.log(params)
    this.peopleService.getPersonajes(params,'','').subscribe(
      (data: Person[]) => {
        this.personajes = data
        console.log(data)
      },
      (error) => {
        console.log('Error:', error)
      },
    )
  }

  startChange(data: any) {
    let mDate = moment(data.value).format('DD/MM/YYYY')
    this.dateStartSearch = mDate
  }

  endChange(data: any) {
    if (data.value != null) {
      let mDate = moment(data.value).format('DD/MM/YYYY')
      this.dateEndSearch = mDate
      /* this.router.navigate(['/search'], {
        queryParams: {
          filter: this.name,
          startDate: this.dateStartSearch,
          endDate: this.dateEndSearch,
        },
      })*/
      this.loadData()
    }
  }

  loadData() {
 let start =moment(this.dateStartSearch, 'DD/MM/YYYY').format("YYYY/MM/DD")
 let end = moment(this.dateEndSearch, 'DD/MM/YYYY').format('YYYY/MM/DD')
    if(!this.dateStartSearch || !this.dateEndSearch){
      start = ""
      end = ""
    }
    this.peopleService.getPersonajes(this.filter, start, end).subscribe(
      (data: Person[]) => {
        this.personajes = data
        console.log(data)
      },
      (error) => {
        console.log('Error:', error)
      },
    )
  }

  formatDate(date?: string): string {
    return moment(date).format("DD [de] MMMM [de] YYYY")
  }
}
