import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';

import { User } from '../users/User'; // TODO REMOVE
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [UsersService]
})
export class HeroesComponent implements OnInit {

  // NOTE
  constructor(private usersService: UsersService) {}
  // constructor() { }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  users: Array<User>;

  ngOnInit() {
    this.usersService.getUsers()
    .subscribe(users => {
      this.users = users;
    })
  }

}
