import { Component } from '@angular/core';

import { DataService } from './signup/signupdata.service';
import { User } from './users/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  data: User = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    })
  }
}
