import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { EditCategoryComponent } from '../../category/edit-category/edit-category.component';
import { ShowCategoriesComponent } from '../../category/show-categories/show-categories.component';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {
  @ViewChild(ShowCategoriesComponent) showComponent: ShowCategoriesComponent | undefined;
  @ViewChild("tabControl") tabController: MatTabGroup | undefined;
  @ViewChild(EditCategoryComponent) editComponent: EditCategoryComponent | undefined
  showConfirm: boolean = false

  categoryShowDetail: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  handleUpdateCategories(){
    this.showComponent?.getCategories()
    if (this.tabController){
      this.tabController.selectedIndex = 0
    }
  }

  handleClickDetail(id: string){
    this.categoryShowDetail = id
    if (this.tabController){
      this.tabController.selectedIndex = 2
      this.editComponent?.getDetailCategory(id)
    }
    
  }

}
