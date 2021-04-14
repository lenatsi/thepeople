import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe( parm => {
      console.log(parm.id)

      //Llamada API
    })
  }

  ngOnInit() {

  }

}
