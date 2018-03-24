import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PageNotFoundComponent } from './not-found.component';
import { SignupComponent } from './signup/signup.component';
import { DescriptionComponent } from './description/description.component';

const appRoutes: Routes = [
  { path: '', component: DescriptionComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'signup', component: SignupComponent },  // TODO
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SignupComponent,
    PageNotFoundComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
