import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { chatApiUrl } from '../utils/constants';
import { EntryRoom } from '../interfaces/room';
@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {

  constructor(
    private http: HttpClient
  ) { }

  entryRoom(user1: string, user2: string):Observable<EntryRoom>{
    return this.http.post<EntryRoom>(`${chatApiUrl}/room/enter`, {user1, user2})
  }
}
