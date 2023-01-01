import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EditCategoryDTO } from 'src/app/interfaces/category';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  @Output() editCategorySuccess = new EventEmitter<void>()

  category: Category = new Category()
  categoryData: EditCategoryDTO = new EditCategoryDTO()
  imgShow: any;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    
  }

  getDetailCategory(id: string){
    console.log("OK")
    if (id != ""){
      console.log("OK")
      this.categoryService.getCategoryById(id).subscribe(response => {
        this.category = response
        this.imgShow = `http://localhost:8080/category/image?id=${this.category.id}`
        this.categoryData.name = this.category.name
        this.categoryData.id = this.category.id
      })
    }
  }

  getInfor(event: Event){
    this.category.name = (event.target as HTMLInputElement).value
  }

  editCategory(){
    this.categoryService.editCategory(this.categoryData).subscribe(response => {
      this.editCategorySuccess.emit()
    })
  }

  uploadImage(event: any){
    var file = event.target.files[0]

    var reader = new FileReader()
    this.categoryData.file = file
    reader.readAsDataURL(file)

    reader.onload = (_event) => {
      this.imgShow = reader.result
    }
  }

}
