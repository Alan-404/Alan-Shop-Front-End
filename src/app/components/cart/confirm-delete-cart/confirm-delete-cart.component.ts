import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirm-delete-cart',
  templateUrl: './confirm-delete-cart.component.html',
  styleUrls: ['./confirm-delete-cart.component.css']
})
export class ConfirmDeleteCartComponent implements OnInit {
  @Input() item: CartProduct | undefined
  @Output() handleForm = new EventEmitter<void>()
  @Output() successDeleteCart = new EventEmitter<void>()

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    
  }

  closeForm(){
    this.handleForm.emit()
  }

  confirmDelete(id: string){
    this.cartService.deleteCart(id).subscribe(response => {
      if (response.success){
        this.handleForm.emit()
        this.successDeleteCart.emit()
      }
    })
  }

}
