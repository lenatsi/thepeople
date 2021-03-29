import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './topMenu/topMenu.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './homePage/homePage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
      TopMenuComponent,
      FooterComponent,
      HomePageComponent,
      SearchComponent,
      DetailComponent,
      NotFoundComponent,
      FilterPipe,
      PostsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
