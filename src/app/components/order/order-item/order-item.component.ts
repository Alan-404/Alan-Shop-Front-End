import { Component, OnInit, Input } from '@angular/core';
import { InfoOrder } from 'src/app/interfaces/order';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() orderInfo: InfoOrder = new InfoOrder()
  constructor() { }

  ngOnInit(): void {
  }

  calculateSumPrice(priceItem: number, quantity: number){
    return priceItem*quantity
  }

}
