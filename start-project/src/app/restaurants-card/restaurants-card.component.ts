import { Component, OnInit,Input, } from '@angular/core';


@Component({
  selector: 'app-restaurants-card',
  templateUrl: './restaurants-card.component.html',
  styleUrls: ['./restaurants-card.component.css']
})
export class RestaurantsCardComponent implements OnInit {
  @Input() texto;
  constructor() { }

  ngOnInit() {
  }
}
