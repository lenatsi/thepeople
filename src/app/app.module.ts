import { PostEditComponent } from './dashboard/postsEdit/postEdit.component'
import { PostDetailComponent } from './dashboard/postsDetail/postDetail.component'
import { HomeComponent } from './dashboard/home/home.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TopMenuComponent } from './topMenu/topMenu.component'
import { FooterComponent } from './footer/footer.component'
import { HomePageComponent } from './homePage/homePage.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { SearchComponent } from './search/search.component'
import { DetailComponent } from './detail/detail.component'
import { NotFoundComponent } from './notFound/notFound.component'
import { FilterPipe } from './pipes/filter.pipe'
import { PostsComponent } from './posts/posts.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatBadgeModule } from '@angular/material/badge'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { MatStepperModule } from '@angular/material/stepper'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import {
  MatNativeDateModule,
  MatRippleModule,
  MAT_DATE_LOCALE,
} from '@angular/material/core'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSliderModule } from '@angular/material/slider'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatTreeModule } from '@angular/material/tree'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { NotifierModule } from 'angular-notifier'
import { DashboardComponent } from './dashboard/dashboard.component'
import { SettingsComponent } from './dashboard/settings/settings.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service'
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt'
import { registerLocaleData } from '@angular/common';
import localeES from "@angular/common/locales/es";

registerLocaleData(localeES, "es");
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
    PostsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    PostDetailComponent,
    PostEditComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NotifierModule,
    HttpClientModule,
  ],
  exports: [MatDatepickerModule, MatNativeDateModule],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },{provide: LOCALE_ID, useValue: 'es-ES'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
