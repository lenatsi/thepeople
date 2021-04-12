import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topMenu',
  templateUrl: './topMenu.component.html',
  styleUrls: ['./topMenu.component.scss']
})
export class TopMenuComponent implements OnInit {
  bgWhite = false
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe( route => {
      if (route instanceof NavigationEnd){
        if(route.url == "/"){
          this.bgWhite =false
        } else{
          this.bgWhite = true
        }
      }
    })
  }

}
