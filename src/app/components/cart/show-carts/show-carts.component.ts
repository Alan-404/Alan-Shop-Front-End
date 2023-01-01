import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CartProduct } from 'src/app/interfaces/cart';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import { hidePhoneNumber, calDiscountedPrice } from 'src/app/utils/lib';

@Component({
  selector: 'app-show-carts',
  templateUrl: './show-carts.component.html',
  styleUrls: ['./show-carts.component.css']
})
export class ShowCartsComponent implements OnInit {
  

  carts: Array<CartProduct> = []


  checked: boolean = false

  hide = hidePhoneNumber
  cal = calDiscountedPrice

  constructor(
    private cartService: CartService,
    private commonService: CommonService
  ) { }

  getMyCart(){
    this.cartService.getMyCart().subscribe(response => {
      this.carts = response
      var count = 0
      this.checked = true
      for (let item of this.carts){
        count += item.cart.quantity
        if (item.cart.status == false){
          this.checked = false
        }
      }
      this.commonService.changeData(count)
    })
  }


  ngOnInit(): void {
    this.getMyCart()

  }

  updateCart(){
    this.getMyCart()
  }

  getNumProducts(){
    var temp = 0
    this.commonService.data$.subscribe(data => {
      temp = data
    })
    return temp
  }


  
  updateAllCarts(event: MatCheckboxChange){
    console.log(event)
    this.cartService.updateAllCarts(event.checked).subscribe(response => {
      console.log(response)
      if (response.success){
        this.getMyCart()
      }
    })
  }
}
