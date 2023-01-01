import { Component, OnInit } from '@angular/core';
import { AddProductDTO } from 'src/app/interfaces/product';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  imgsShow: Array<any> = []

  addProductData = new AddProductDTO()


  toppingList: Array<Category> = [];


  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  getCategories(){
    this.categoryService.getCategories(1, 100).subscribe(response => {
      console.log(response.categories)
      this.toppingList = response.categories
    })
  }

  

  ngOnInit(): void {
    this.getCategories()
  }

  uploadImage(event: any){
    var file = event.target.files[0]
    this.addProductData.images.push(file)
    var reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = (_event) => {
      this.imgsShow.push(reader.result)
    }
  }

  getInfor(event: Event){
    var name = (event.target as HTMLInputElement).name
    var value = (event.target as HTMLInputElement).value
    if (name == "name"){
      this.addProductData.name = value
    }
    else if (name == "description"){
      this.addProductData.description = value
    }
    else if (name == "price"){
      this.addProductData.price = Number(value)
    }
  }

  submitAddProduct(){
    console.log(this.addProductData)
    this.productService.addProduct(this.addProductData).subscribe(response => {
      console.log(response)
    })
  }

  getOptions(event: any){
    this.addProductData.categories = event
  }

}
