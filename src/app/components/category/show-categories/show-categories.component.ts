import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ResponseGetCategories } from 'src/app/interfaces/category';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { formatDate } from 'src/app/utils/lib';

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.css']
})
export class ShowCategoriesComponent implements OnInit {
  @Output() showDetailCategory = new EventEmitter<string>()
  responseGetCategories: ResponseGetCategories = {categories: [], totalPage: 1, totalCategories: 0}
  formatDateFunc = formatDate

  page: number = 1
  num: number = 4

  showConfirm: boolean = false
  categoryFocus: Category = new Category()

  constructor(
    private categoryService: CategoryService
  ) { }

  getCategories(){
    this.categoryService.getCategories(this.page, this.num).subscribe(response => {
      this.responseGetCategories = response
    })
  }

  ngOnInit(): void {
    this.getCategories()
  }

  deleteCategory(category: Category){
    /* this.categoryService.deleteCategory(id).subscribe(response => {
      if (response == true){
        this.getCategories()
      }
    })  */
    this.categoryFocus = category
    this.showConfirm = true
  }

  handleSuccessDeleteCategory(){
    this.getCategories()
    this.showConfirm = false
  }

  nextPage(e: PageEvent){
    this.page = e.pageIndex + 1
    this.getCategories()
  }

  showDetail(id: string){
    this.showDetailCategory.emit(id)
  }

  closeDeleteForm(){
    this.showConfirm = false
  }

}
