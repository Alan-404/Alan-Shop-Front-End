import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/cart';
import { calDiscountedPrice } from 'src/app/utils/lib';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartProduct | undefined
  @Output() actionUpdate = new EventEmitter<void>()

  cal = calDiscountedPrice

  confirmDelete: boolean = false
  

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {

  }

  plusItem(){
    if (this.cartItem){
      if (this.cartItem.cart.quantity == this.cartItem.warehouse.quantity){
        return
      }
      this.cartItem.cart.quantity++
      this.handleCart(this.cartItem.cart)
    }
  }

  minusItem(){
    if (this.cartItem){
      if (this.cartItem.cart.quantity == 0){
        return
      }
      this.cartItem.cart.quantity--
      if (this.cartItem.cart.quantity == 0){
        this.deleteCartItem()
      }
      else{
        this.handleCart(this.cartItem.cart)
      }
    }
  }

  handleCart(cart: Cart){
    this.cartService.handleMyCart(cart).subscribe(response => {
      console.log(response)
      if (response.success){
        this.actionUpdate.emit()
      }
    })
  }
  deleteCartItem(){
    this.handleConfirmDeleteForm()
  }
  
  handleConfirmDeleteForm(){
    this.confirmDelete = !this.confirmDelete
  }

  checkStatus(event: MatCheckboxChange, item: CartProduct){
    item.cart.status = event.checked
    this.cartService.handleMyCart(item.cart).subscribe(response => {
      if (response.success){
        this.actionUpdate.emit()
      }
    })
  }
  
}
