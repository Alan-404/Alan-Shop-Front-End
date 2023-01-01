import { Component, OnInit, Input } from '@angular/core';
import { InfoBill } from 'src/app/interfaces/bill';
import { Bill } from 'src/app/models/bill';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {
  @Input() item: InfoBill = new InfoBill()
  constructor() { }

  ngOnInit(): void {
  }

  calNumProducts(orders: Array<Order>){
    var num = 0;
    for (let order of orders){
      num += order.quantity
    }

    return num
  }

}
