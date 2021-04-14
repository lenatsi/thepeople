import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { HomePageComponent } from './homePage/homePage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PostDetailComponent} from './dashboard/postsDetail/postDetail.component';
import { PostEditComponent } from './dashboard/postsEdit/postEdit.component';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  {path: "", component: HomePageComponent, pathMatch: "full"},
  {path: "404", component: NotFoundComponent},
  {path: "search", component: SearchComponent, pathMatch: "full"},
  {path: "detail/:id", component: DetailComponent},
  {path: "login", component: LoginComponent },
  {path: "register", component: RegisterComponent },

  {path: "dashboard", component: DashboardComponent, children:
    [
      { path: "", redirectTo: "dashboardhome", pathMatch: "full" },
      { path: "dashboardhome", component: HomeComponent },
      { path: "postsedit", component: PostEditComponent },
      { path: "postsedit/:id/edit", component: PostDetailComponent },
      { path: "settings", component: SettingsComponent }
    ]
  },
  {path: "**", redirectTo: "/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
