import { NotFoundComponent } from './notFound/notFound.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { HomePageComponent } from './homePage/homePage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomePageComponent, pathMatch: "full"},
  {path: "404", component: NotFoundComponent},
  {path: "search", component: SearchComponent, pathMatch: "full"},
  {path: "detail", component: DetailComponent, pathMatch: "full"},
  {path: "**", redirectTo: "/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
