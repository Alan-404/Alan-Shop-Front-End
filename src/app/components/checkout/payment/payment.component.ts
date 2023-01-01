import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';
import { BillService } from 'src/app/services/bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cartItems: Array<CartProduct> = []

  constructor(
    private cartService: CartService,
    private billService: BillService,
    private router: Router
  ) { }

  getCartOrder(){
    this.cartService.getCartToOrder().subscribe(response => {
      this.cartItems = response
    })
  }

  ngOnInit(): void {
    this.getCartOrder()
  }

  orderAction(){
    console.log(this.cartItems)
    this.billService.createBill(this.cartItems).subscribe(response => {
      if (response.success){
        this.router.navigate(['/home/cart'])
      }
    })
  }

}
