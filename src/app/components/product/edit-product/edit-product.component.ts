import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DistributorService } from 'src/app/services/distributor.service';
import { Router } from '@angular/router';
import { InfoProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId: string = ""
  item: InfoProduct | undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private distributorService: DistributorService,
    private router: Router,
    private productService: ProductService,
    private discountService: DiscountService
  ) { }

  getProduct(id: string){
    this.productService.getProductById(id).subscribe(res => {
      this.item = res
    })
  }

  checkDistributor(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.productId = params['id']
      if (this.productId){
        this.distributorService.checkDistributorProduct(this.productId).subscribe(resposne => {
          if (resposne == false){
            this.router.navigate(['/home'])
          }
          else{
            this.getProduct(this.productId);
          }
        })
      }
    })
  }

  ngOnInit(): void {
    this.checkDistributor()
  }

  getInfo(event: Event){
    var name = (event.target as HTMLInputElement).name
    var value = (event.target as HTMLInputElement).value
    if (this.item){
      if (name == "name"){
        this.item.product.name = value
      }
      else if (name == "description"){
        this.item.product.description = value
      }
      else if (name == "price"){
        this.item.product.price = Number(value)
      }
      else if (name == "discount"){
        this.item.discount.value = Number(value)
      }
    }
  }

  submitUpdate(){
    if (this.item){
      this.productService.editProduct(this.item.product).subscribe(response => {
        console.log(response)
      })
    }
  }

  submitDiscount(){
    if (this.item){
      this.discountService.editDiscount(this.item.discount).subscribe(response => {
        console.log(response)
      })
    }
  }
}
