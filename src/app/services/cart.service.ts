import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { apiUrl } from '../utils/constants';
import { AddCartDTO, CartProduct } from '../interfaces/cart';
import { Response } from '../interfaces/response';
import { Cart } from '../models/cart';
const headerOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('shop')}`
  })
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }

  addCart(data: AddCartDTO):Observable<Response>{
    return this.http.post<Response>(`${apiUrl}/cart/add`, data, headerOptions)
  }

  getNumProductInCart():Observable<number>{
    return this.http.get<number>(`${apiUrl}/cart/num`, headerOptions)
  }

  getMyCart():Observable<Array<CartProduct>>{
    return this.http.get<Array<CartProduct>>(`${apiUrl}/cart/my`, headerOptions)
  }

  handleMyCart(cart: Cart):Observable<Response>{
    return this.http.post<Response>(`${apiUrl}/cart/handle`, cart, headerOptions)
  }

  deleteCart(id: string):Observable<Response>{
    return this.http.delete<Response>(`${apiUrl}/cart/${id}`, headerOptions)
  }

  updateAllCarts(status: boolean):Observable<Response>{
    return this.http.put<Response>(`${apiUrl}/cart/status`, {status}, headerOptions)
  }

  getCartToOrder():Observable<Array<CartProduct>>{
    return this.http.get<Array<CartProduct>>(`${apiUrl}/cart/order`, headerOptions)
  }

}
