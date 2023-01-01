import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddCartDTO } from 'src/app/interfaces/cart';

import { ProductService } from 'src/app/services/product.service';
import { convertNum2Vec, calDiscountedPrice } from 'src/app/utils/lib';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { InfoProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  checkNull: boolean = false
  product: InfoProduct | undefined
  indexImage: number = 0;

  numProduct: number = 0;

  addCartData: AddCartDTO = new AddCartDTO()

  converter = convertNum2Vec
  calculate = calDiscountedPrice

  constructor(
    private activatedRouter: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private commonService: CommonService
  ) { }

  getProduct(id: string){
    this.productService.getProductById(id).subscribe(response => {
      if (response == null){
        this.checkNull = true
        return
      }
      this.product = response
    })
  }

  getIdQuery(){
    this.activatedRouter.queryParams.subscribe(data => {
      this.addCartData.productId = data['id']
      this.getProduct(this.addCartData.productId)
    })
  }

  ngOnInit(): void {
    this.getIdQuery()
  }

  changeImageShow(index: number){
    if (index == this.indexImage){
      return
    }
    this.indexImage = index
  }
  
  getQuantity(event: Event){
    this.addCartData.quantity = Number((event.target as HTMLInputElement).value)
  }

  addCartSubmit(){
    console.log(this.addCartData)
    this.cartService.addCart(this.addCartData).subscribe(response => {
      if (response.success){
        this.cartService.getNumProductInCart().subscribe(res => {
          this.commonService.changeData(res)
        })
      }
    })
  }

  

}
