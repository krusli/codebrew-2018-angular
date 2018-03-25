import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  showModalBool = false;

  showModal() {
    console.log('showModal');
    this.showModalBool = true;
  }

  hideModal(event) {
    console.log('hideModal');
    if (!event || event.target.id == 'myModal')
      this.showModalBool = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
