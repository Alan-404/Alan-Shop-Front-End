import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddCategoryDTO } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  @Output() addCategorySuccess = new EventEmitter<void>();

  imageShow: any = '';

  categoryData: AddCategoryDTO = new AddCategoryDTO()

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  getInfo(event: Event){
    this.categoryData.name = (event.target as HTMLInputElement).value
  }

  uploadImage(event: any){
    var file = event.target.files[0]

    var reader = new FileReader()
    this.categoryData.file = file
    reader.readAsDataURL(file)

    reader.onload = (_event) => {
      this.imageShow = reader.result
    }
  }

  sumbitCategory(){
    this.categoryService.addCategory(this.categoryData).subscribe(response => {
      this.addCategorySuccess.emit();
    })
  }

}
