import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { apiUrl } from '../utils/constants';
import { User } from '../models/user';
import { RegisterDTO } from '../interfaces/user';
import { Response } from '../interfaces/response';

const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${localStorage.getItem('shop')}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUserByToken():Observable<User>{
    return this.http.get<User>(`${apiUrl}/user/token`, headerOptions)
  }

  getAvatarUser(id: string):Observable<string>{
    return this.http.get<string>(`${apiUrl}/user/avatar?id=${id}`)
  }

  registerUser(user: RegisterDTO):Observable<Response>{
    var form = new FormData()
    for (var name in user){
      if (name == "firstName" || name == "lastName" || name == "email" || name == "phone" || name == "address" || name == "password" || name == "gender" || name == "file" || name == "role"){
        form.append(name, user[name])
      }
    }

    return this.http.post<Response>(`${apiUrl}/user/register`, form)
  }

  editUserInfo(user: User):Observable<Response>{
    return this.http.put<Response>(`${apiUrl}/user/edit`, user, headerOptions)
  }

  getUsers():Observable<Array<User>>{
    return this.http.get<Array<User>>(`${apiUrl}/user`)
  }

  getUserById(id: string):Observable<User>{
    return this.http.get<User>(`${apiUrl}/user/info/${id}`)
  }
}
