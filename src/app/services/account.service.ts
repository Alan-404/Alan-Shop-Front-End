import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { ChangePasswordDTO, LoginDTO, ResponseLogin } from '../interfaces/account';
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
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  loginAccount(loginData: LoginDTO):Observable<ResponseLogin>{
    return this.http.post<ResponseLogin>(`${apiUrl}/account/login`, loginData)
  }

  checkStrengthPassword(password: String):Observable<Number>{
    return this.http.post<Number>(`http://localhost:8000/password/check`, {password})
  }

  changePassword(data: ChangePasswordDTO):Observable<Response>{
    return this.http.put<Response>(`${apiUrl}/account/password`, data, headerOptions)
  }
}
