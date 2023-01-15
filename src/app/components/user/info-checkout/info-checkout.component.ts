import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/cart';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { hidePhoneNumber, calDiscountedPrice } from 'src/app/utils/lib';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info-checkout',
  templateUrl: './info-checkout.component.html',
  styleUrls: ['./info-checkout.component.css']
})
export class InfoCheckoutComponent implements OnInit {
  @Input() carts: Array<CartProduct> = []
  @Output() submitOrder = new EventEmitter<void>()
  hide = hidePhoneNumber
  cal = calDiscountedPrice

  user = new User()

  paymentPage: boolean = false
  contentBtn: string = "Thanh Toán"

  constructor(
    private userService: UserService,
    private commonService: CommonService,
    private router: Router
  ) { }

  checkUrl(){
    if (this.router.url.match('payment')){
      this.paymentPage = true
      this.contentBtn = "Đặt Hàng"
    }
  }

  getUser(){
    this.userService.getUserByToken().subscribe(response => {
      this.user = response
    })
  }
  

  ngOnInit(): void {
    this.getUser()
    this.checkUrl()
  }

  calSumPrice(){
    var sum = 0
    for (let item of this.carts){
      if (item.cart.status){
        sum += this.cal(item.product.price, item.discount.value) * item.cart.quantity
      }
    }
    return sum
  }

  getNumProducts(){
    var temp = 0
    this.commonService.data$.subscribe(data => {
      temp = data
    })
    return temp
  }

  submitButton(){
    if (this.paymentPage){
      this.submitOrder.emit()
    }
    else{
      this.router.navigate(['/payment'])
    }
  }
  

}
