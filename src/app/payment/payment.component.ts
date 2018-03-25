import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  donateAmount = 0;

  setDonateAmount(amt) {
    this.donateAmount = amt;
  }

  isInvalidDonateAmount() {
    // return isNaN(parseFloat(this.donateAmount));
    return true;
  }

  donate() {
      this.router.navigate(['./projects/1/thanks']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
