import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { apiUrl } from '../utils/constants';
import { AddProductDTO, InfoProduct, ResponsePaginationProducts } from '../interfaces/product';
import { Response } from '../interfaces/response';
import { Product } from '../models/product';
const headerOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('shop')}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  addProduct(data: AddProductDTO):Observable<Response>{
    var form = new FormData()
    form.append('name', data.name)
    form.append('description', data.description)
    form.append('price', String(data.price))
    for (let item of data.images){
      form.append('images', item)
    }
    for (let item of data.categories){
      form.append('categories', item)
    }
    return this.http.post<Response>(`${apiUrl}/product/add`, form, headerOptions)
  }

  getProducts(page: number, num: number):Observable<ResponsePaginationProducts>{
    return this.http.get<ResponsePaginationProducts>(`${apiUrl}/product?num=${num}&page=${page}`)
  }

  getProductById(id: string):Observable<InfoProduct>{
    return this.http.get<InfoProduct>(`${apiUrl}/product/${id}`)
  }

  getProductsByDistributor():Observable<ResponsePaginationProducts>{
    return this.http.get<ResponsePaginationProducts>(`${apiUrl}/product/distributor`, headerOptions)
  }

  editProduct(product: Product):Observable<Response>{
    return this.http.put<Response>(`${apiUrl}/product/edit`, product, headerOptions);
  }
  

}
