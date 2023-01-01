import { Component, OnInit, Input } from '@angular/core';
import { InfoProduct } from 'src/app/interfaces/product';
import { reduceDescription, calDiscountedPrice  } from 'src/app/utils/lib';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  @Input() product: InfoProduct | undefined

  reducer = reduceDescription
  cal = calDiscountedPrice 
  constructor(

  ) { }

  ngOnInit(): void {
  }

}
