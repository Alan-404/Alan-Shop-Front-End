import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { apiUrl } from '../utils/constants';
import { Discount } from '../models/discount';
import { Response } from '../interfaces/response';

const headerOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('shop')}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(
    private http: HttpClient
  ) { }

  editDiscount(discount: Discount):Observable<Response>{
    return this.http.put<Response>(`${apiUrl}/discount/edit`, discount, headerOptions)
  }
}
