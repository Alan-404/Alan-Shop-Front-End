import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { apiUrl } from '../utils/constants';
import { Response } from '../interfaces/response';
const headerOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('shop')}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(
    private http: HttpClient
  ) { }

  /* handleWarehouse(warehouse: WarehouseService):Observable<Response>{
    return this.http.put<Response>(`${apiUrl}/warehouse/change`)
  } */
}
