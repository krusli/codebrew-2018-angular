import { Component } from '@angular/core';
import { DataService } from './signup/signupdata.service';
import { User } from './users/User';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  data: any = new User("", "", "", ""); // TODO any

  constructor(private dataService: DataService,
    private router: Router) {}

  signOut() {
    this.data = new User("", "", "", "");
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    })
  }
}
