import { Component, OnInit } from '@angular/core';

import { User } from '../users/User';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UsersService]
})
export class SignupComponent implements OnInit {

  model = new User("", "", "", "");
  showSignUp: bool = true;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  newUser() { // user clicks once the form is done
    if (this.model.firstName && this.model.lastName && this.model.email)
      this.usersService.newUser(this.model)
      .subscribe(user => {
        this.model = new User("", "", "", ""); // TODO remove. Clears the form
      })
  }

  switchToSignIn() {
    this.showSignUp = !this.showSignUp;
  }

  signIn() {
    // TODO STUB
    console.log('signIn()');
  }

}
