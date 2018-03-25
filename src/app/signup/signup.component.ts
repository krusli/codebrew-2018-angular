import { Component, OnInit } from '@angular/core';

import { User } from '../users/User';
import { UsersService } from '../users/users.service';
import { DataService } from '../signup/signupdata.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UsersService]
})
export class SignupComponent implements OnInit {

  model = new User("", "", "", "");
  showSignUp: boolean = true;

  constructor(private usersService: UsersService,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
  }

  newUser() { // user clicks once the form is done
    if (this.model.firstName && this.model.lastName && this.model.email)
      this.usersService.newUser(this.model)
      .subscribe(user => {
        this.dataService.updateData(user);
        this.router.navigate(['./']);

        this.model = new User("", "", "", ""); // TODO remove. Clears the form
      })
  }

  switchToSignIn() {
    this.showSignUp = !this.showSignUp;
  }

  signIn() {
    if (this.model.email) {
      this.usersService.signIn(this.model.email, "")
      .subscribe(obj => {
        // console.log(obj);

        this.dataService.updateData(obj);
        this.router.navigate(['./']);

      });  // TODO no password
      // console.log('signIn()');
    }

  }

}
