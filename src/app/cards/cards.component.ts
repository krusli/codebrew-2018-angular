import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  projects = [{
      "name": "Volunteering at a rice farm",
      "location": "Mekong Delta, Vietnam",
      "description": "Help out local farmers during the harvest season.",
      "photo": "farming.jpg"
  },
  {
      "name": "Donation for tetanus vaccines",
      "location": "Laos",
      "description": "Donate to our vaccine program for school kids and safeguard their health.",
      "photo": "vaccine.jpg"
  },
  {
      "name": "Donate to the Global Fund for Education",
      "location": "Municipality of Dinalupihan, Philippines",
      "description": "The Global Education Fund is committed to helping children see possibilities beyond their experience every day. Make an impact in their lives.",
      "sponsor": "Global Education Fund",
      "photo": "projDscpt.jpg"
  },
  {
      "name": "Funding for Medical Device at Buriram Hospital",
      "location": "Buriram, Thailand",
      "description": "Our patients are in need of access to better medical facilities. Please help us in the increasing demands on our Hospital.",
      "photo": "CT.jpg"
  },
  {
      "name": "Donate to Sri Lanka Safe Water Project",
      "location": "Sri Lanka",
      "description": "Improve water condition for local communities by funding water filters.",
      "sponsor": "Foundation of Goodness",
      "photo": "cleanWater.jpg"
  }];


  constructor() { }

  ngOnInit() {
  }

}
