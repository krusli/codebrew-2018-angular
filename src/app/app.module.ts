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
import { HomeComponent } from './home/home.component';

import { DataService } from './signup/signupdata.service';
import { CardsComponent } from './cards/cards.component';
import { PaymentComponent } from './payment/payment.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'signup', component: SignupComponent },  // TODO
  { path: 'projects', component: CardsComponent },
  { path: 'projects/1', component: DescriptionComponent },
  { path: 'projects/:projectID/payment', component: PaymentComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SignupComponent,
    PageNotFoundComponent,
    DescriptionComponent,
    HomeComponent,
    CardsComponent,
    PaymentComponent
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
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
