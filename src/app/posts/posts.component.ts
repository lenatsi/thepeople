import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }
  posts = [
    {
      "title": "Bill Gates",
      "date": "28/10/1955",
      "profession":"Filántropo",
      "imgUrl": "../../assets/img/main.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a elementum consectetur. In pellentesque felis nec leo pulvinar sodales vitae ac lacus. Integer bibendum fermentum metus ac euismod. Vestibulum sapien leo, interdum in congue quis, ultricies vitae nibh. Duis vel elementum nulla. Suspendisse suscipit augue eget risus tincidunt faucibus. In id mi tellus. Vivamus egestas tellus sed tortor tincidunt, quis condimentum massa molestie. Nulla vel ornare lorem. Nam tristique porta nisl, id eleifend dui. Proin imperdiet auctor justo et imperdiet. Vivamus nunc mauris, luctus eget elementum id, pellentesque ac odio. Quisque eu eros dictum, pretium nisi in, pulvinar ex. Sed vel mi molestie, mollis ligula eu, ultrices eros. Maecenas vitae venenatis ex. Aliquam at luctus turpis. Quisque rutrum blandit convallis. Nam nec magna sed augue pretium consequat ut a arcu. Cras magna magna, varius ut tortor ut, gravida placerat turpis."
    },
    {
      "title": "Ibai Llanos",
      "date": "26/03/1995",
      "profession":"Creador contenido",
      "imgUrl": "../../assets/img/main-3.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a elementum consectetur. In pellentesque felis nec leo pulvinar sodales vitae ac lacus. Integer bibendum fermentum metus ac euismod. Vestibulum sapien leo, interdum in congue quis, ultricies vitae nibh. Duis vel elementum nulla. Suspendisse suscipit augue eget risus tincidunt faucibus. In id mi tellus. Vivamus egestas tellus sed tortor tincidunt, quis condimentum massa molestie. Nulla vel ornare lorem. Nam tristique porta nisl, id eleifend dui. Proin imperdiet auctor justo et imperdiet. Vivamus nunc mauris, luctus eget elementum id, pellentesque ac odio. Quisque eu eros dictum, pretium nisi in, pulvinar ex. Sed vel mi molestie, mollis ligula eu, ultrices eros. Maecenas vitae venenatis ex. Aliquam at luctus turpis. Quisque rutrum blandit convallis. Nam nec magna sed augue pretium consequat ut a arcu. Cras magna magna, varius ut tortor ut, gravida placerat turpis."
    },
    {
      "title": "Elon Musk",
      "date": "28/07/1971",
      "profession":"The Boss",
      "imgUrl": "../../assets/img/main-2.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a elementum consectetur. In pellentesque felis nec leo pulvinar sodales vitae ac lacus. Integer bibendum fermentum metus ac euismod. Vestibulum sapien leo, interdum in congue quis, ultricies vitae nibh. Duis vel elementum nulla. Suspendisse suscipit augue eget risus tincidunt faucibus. In id mi tellus. Vivamus egestas tellus sed tortor tincidunt, quis condimentum massa molestie. Nulla vel ornare lorem. Nam tristique porta nisl, id eleifend dui. Proin imperdiet auctor justo et imperdiet. Vivamus nunc mauris, luctus eget elementum id, pellentesque ac odio. Quisque eu eros dictum, pretium nisi in, pulvinar ex. Sed vel mi molestie, mollis ligula eu, ultrices eros. Maecenas vitae venenatis ex. Aliquam at luctus turpis. Quisque rutrum blandit convallis. Nam nec magna sed augue pretium consequat ut a arcu. Cras magna magna, varius ut tortor ut, gravida placerat turpis."
    },
    {
      "title": "Magan M.",
      "date": "28/10/1955",
      "profession":"Filántropo",
      "imgUrl": "../../assets/img/main.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a elementum consectetur. In pellentesque felis nec leo pulvinar sodales vitae ac lacus. Integer bibendum fermentum metus ac euismod. Vestibulum sapien leo, interdum in congue quis, ultricies vitae nibh. Duis vel elementum nulla. Suspendisse suscipit augue eget risus tincidunt faucibus. In id mi tellus. Vivamus egestas tellus sed tortor tincidunt, quis condimentum massa molestie. Nulla vel ornare lorem. Nam tristique porta nisl, id eleifend dui. Proin imperdiet auctor justo et imperdiet. Vivamus nunc mauris, luctus eget elementum id, pellentesque ac odio. Quisque eu eros dictum, pretium nisi in, pulvinar ex. Sed vel mi molestie, mollis ligula eu, ultrices eros. Maecenas vitae venenatis ex. Aliquam at luctus turpis. Quisque rutrum blandit convallis. Nam nec magna sed augue pretium consequat ut a arcu. Cras magna magna, varius ut tortor ut, gravida placerat turpis."
    },
    {
      "title": "Malania Gates",
      "date": "28/10/1955",
      "profession":"Filántropo",
      "imgUrl": "../../assets/img/main.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a elementum consectetur. In pellentesque felis nec leo pulvinar sodales vitae ac lacus. Integer bibendum fermentum metus ac euismod. Vestibulum sapien leo, interdum in congue quis, ultricies vitae nibh. Duis vel elementum nulla. Suspendisse suscipit augue eget risus tincidunt faucibus. In id mi tellus. Vivamus egestas tellus sed tortor tincidunt, quis condimentum massa molestie. Nulla vel ornare lorem. Nam tristique porta nisl, id eleifend dui. Proin imperdiet auctor justo et imperdiet. Vivamus nunc mauris, luctus eget elementum id, pellentesque ac odio. Quisque eu eros dictum, pretium nisi in, pulvinar ex. Sed vel mi molestie, mollis ligula eu, ultrices eros. Maecenas vitae venenatis ex. Aliquam at luctus turpis. Quisque rutrum blandit convallis. Nam nec magna sed augue pretium consequat ut a arcu. Cras magna magna, varius ut tortor ut, gravida placerat turpis."
    },
    {
      "title": "Bill Gates",
      "date": "28/10/1955",
      "profession":"Filántropo",
      "imgUrl": "../../assets/img/main.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a elementum consectetur. In pellentesque felis nec leo pulvinar sodales vitae ac lacus. Integer bibendum fermentum metus ac euismod. Vestibulum sapien leo, interdum in congue quis, ultricies vitae nibh. Duis vel elementum nulla. Suspendisse suscipit augue eget risus tincidunt faucibus. In id mi tellus. Vivamus egestas tellus sed tortor tincidunt, quis condimentum massa molestie. Nulla vel ornare lorem. Nam tristique porta nisl, id eleifend dui. Proin imperdiet auctor justo et imperdiet. Vivamus nunc mauris, luctus eget elementum id, pellentesque ac odio. Quisque eu eros dictum, pretium nisi in, pulvinar ex. Sed vel mi molestie, mollis ligula eu, ultrices eros. Maecenas vitae venenatis ex. Aliquam at luctus turpis. Quisque rutrum blandit convallis. Nam nec magna sed augue pretium consequat ut a arcu. Cras magna magna, varius ut tortor ut, gravida placerat turpis."
    },
    {
      "title": "Bill Gates",
      "date": "28/10/1955",
      "profession":"Filántropo",
      "imgUrl": "../../assets/img/main.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a elementum consectetur. In pellentesque felis nec leo pulvinar sodales vitae ac lacus. Integer bibendum fermentum metus ac euismod. Vestibulum sapien leo, interdum in congue quis, ultricies vitae nibh. Duis vel elementum nulla. Suspendisse suscipit augue eget risus tincidunt faucibus. In id mi tellus. Vivamus egestas tellus sed tortor tincidunt, quis condimentum massa molestie. Nulla vel ornare lorem. Nam tristique porta nisl, id eleifend dui. Proin imperdiet auctor justo et imperdiet. Vivamus nunc mauris, luctus eget elementum id, pellentesque ac odio. Quisque eu eros dictum, pretium nisi in, pulvinar ex. Sed vel mi molestie, mollis ligula eu, ultrices eros. Maecenas vitae venenatis ex. Aliquam at luctus turpis. Quisque rutrum blandit convallis. Nam nec magna sed augue pretium consequat ut a arcu. Cras magna magna, varius ut tortor ut, gravida placerat turpis."
    }
  ]
  ngOnInit() {
  }

}
