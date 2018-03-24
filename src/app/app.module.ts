import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PageNotFoundComponent } from './not-found.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  // { path: '',   redirectTo: '/signup', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'signup', component: SignupComponent },  // TODO
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
