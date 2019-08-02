import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  dadosCard;
  constructor(private restaurantes: RestaurantsService) { }
  @Input() texto;
  @Output() click = new EventEmitter();
  ngOnInit() {
    
    this.restaurantes.getRestaurant().subscribe((dados) => {
      this.dadosCard = dados;
      console.log(dados);
      return dados;
    });

  }

}
