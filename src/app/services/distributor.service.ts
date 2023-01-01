import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { apiUrl } from '../utils/constants';
const headerOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('shop')}`
  })
}
@Injectable({
  providedIn: 'root'
})
export class DistributorService {

  constructor(
    private http: HttpClient
  ) { }

  checkDistributor():Observable<boolean> {
    return this.http.get<boolean>(`${apiUrl}/distributor/check`, headerOptions)
  }

  checkDistributorProduct(productId: string):Observable<Boolean>{
    return this.http.get<Boolean>(`${apiUrl}/distributor/product/${productId}`, headerOptions)
  }
}
