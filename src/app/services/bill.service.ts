import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { apiUrl } from '../utils/constants';
import { Response } from '../interfaces/response';
import { CartProduct } from '../interfaces/cart';
import { BillDetail, InfoBill, PaginationBills } from '../interfaces/bill';
const headerOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('shop')}`
  })
}
@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private http: HttpClient
  ) { }

  createBill(data: Array<CartProduct>):Observable<Response>{
    
    return this.http.post<Response>(`${apiUrl}/bill/add`, {"products": data}, headerOptions)
  }

  getMyBills(page: Number, num: Number):Observable<PaginationBills>{
    return this.http.get<PaginationBills>(`${apiUrl}/bill/my?page=${page}&num=${num}`, headerOptions)
  }

  getBillById(billId: String):Observable<BillDetail>{
    return this.http.get<BillDetail>(`${apiUrl}/bill/${billId}`, headerOptions)
  }
}
