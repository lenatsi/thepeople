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
}
