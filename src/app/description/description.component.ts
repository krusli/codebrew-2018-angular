import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, Component} from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  showThanks = false;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let param = params['param'];
      if (param == 'thanks') {
        this.showThanks = true;
      }

    })
  }

}
