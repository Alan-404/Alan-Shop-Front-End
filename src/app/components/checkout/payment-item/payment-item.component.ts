import { Component, OnInit, Input } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/cart';
import { calDiscountedPrice } from 'src/app/utils/lib';

@Component({
  selector: 'app-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrls: ['./payment-item.component.css']
})
export class PaymentItemComponent implements OnInit {
  @Input() item: CartProduct | undefined
  cal = calDiscountedPrice
  constructor() { }

  ngOnInit(): void {
  }

}
