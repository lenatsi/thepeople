import { Router } from '@angular/router';
import { Component } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thepeople';
  search= faSearch;

  constructor(private router: Router){
    moment.locale('es')
    
  }
  ngOnInit(){
    //localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDdlMDZkOGNiNjU1NDA5ODJlYzE5MGQiLCJpYXQiOjE2MTg4NzIwMzQsImV4cCI6MTYxOTQ3NjgzNH0.eg0OQHSysJpn_7N8CymbMTBubVF2v5x8RKfG5hx10h4')
  }
}
