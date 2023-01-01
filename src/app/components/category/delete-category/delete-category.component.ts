import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {
  @Output() handleClose = new EventEmitter<void>()
  @Output() deleteCategorySuccess = new EventEmitter<void>()
  @Input() category: Category = new Category()

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  closeDeleteForm(){
    this.handleClose.emit()
  }

  deleteCategory(id: string){
    console.log(this.category)
    this.categoryService.deleteCategory(id).subscribe(response => {
      if (response == true){
        this.deleteCategorySuccess.emit()
      }
    }) 
  }

}
