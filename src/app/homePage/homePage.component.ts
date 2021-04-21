import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent implements OnInit {
  fasearch= faSearch;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(searchValue: string){
    this.router.navigate(["/search"], { queryParams: { name: searchValue}})
  }


}
