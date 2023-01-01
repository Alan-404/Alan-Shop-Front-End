import { Component, OnInit } from '@angular/core';
import { InfoProduct } from 'src/app/interfaces/product';

import { Banner } from 'src/app/models/banner';
import { Product } from 'src/app/models/product'
import { BannerService } from 'src/app/services/banner.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  numOfBanners: Number = 3;
  banners: Array<Banner> = [];

  products: Array<InfoProduct> = []

  numOfProducts: number = 5

  constructor(
    private bannerService: BannerService,
    private productService: ProductService
  ) { }


  getBanners(){
    this.bannerService.getBanners(1, this.numOfBanners).subscribe(response => {
      this.banners = response.banners
    })
  }

  getProducts(){
    this.productService.getProducts(1, this.numOfProducts).subscribe(response => {
      this.products = response.products
      console.log(this.products)
    })
  }

  ngOnInit(): void {
    this.getBanners()
    this.getProducts()
  }

  moreProducts(){
    this.numOfProducts += 4
    this.getProducts()
  }

}
