import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { apiUrl } from '../utils/constants';
import { ResponseGetBanners } from '../interfaces/banner';
@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
    private http: HttpClient
  ) { }

  getBanners(page: Number, num: Number):Observable<ResponseGetBanners>{
    return this.http.get<ResponseGetBanners>(`${apiUrl}/banner?num=${num}&page=${page}`);
  }
}
