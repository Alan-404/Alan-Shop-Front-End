import { Component, OnInit } from '@angular/core';
import { InfoProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  productItems: Array<InfoProduct> = []
  

  constructor(
    private productService: ProductService
  ) { }

  getProducts(){
    this.productService.getProductsByDistributor().subscribe(response => {
      console.log(response)
      this.productItems = response.products
    })
  }

  ngOnInit(): void {
    this.getProducts()
  }

}
