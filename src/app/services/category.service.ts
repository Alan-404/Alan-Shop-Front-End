import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { apiUrl } from '../utils/constants';
import { AddCategoryDTO, EditCategoryDTO, ResponseGetCategories } from '../interfaces/category';
import { Response } from '../interfaces/response';
import { Category } from '../models/category';

const headerOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('shop')}`
  })
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  addCategory(category: AddCategoryDTO):Observable<Response>{
    var form = new FormData();
    form.append('name', category.name)
    form.append('file', category.file)
    return this.http.post<Response>(`${apiUrl}/category/add`, form, headerOptions);
  }

  getCategories(page: Number, num: Number):Observable<ResponseGetCategories>{
    return this.http.get<ResponseGetCategories>(`${apiUrl}/category?page=${page}&num=${num}`)
  }

  deleteCategory(id: string):Observable<Boolean>{
    return this.http.delete<Boolean>(`${apiUrl}/category/${id}`, headerOptions);
  }

  getCategoryById(id: string):Observable<Category>{
    return this.http.get<Category>(`${apiUrl}/category/${id}`)
  }

  editCategory(category: EditCategoryDTO):Observable<Response>{
    var form = new FormData()
    for (var key in category){
      if (key == "name" || key == "id" || key == "file"){
        form.append(key, category[key])
      }
    }
    return this.http.put<Response>(`${apiUrl}/category/edit`, form, headerOptions);
  }
}
