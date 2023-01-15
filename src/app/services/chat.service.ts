import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Socket, io } from 'socket.io-client';
import { Message } from '../models/message';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { chatApiUrl } from '../utils/constants';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: Socket
  private url = 'http://localhost:5000'

  constructor(
    private http: HttpClient
  ) { 
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});

  }

  joinRoom(data: any): void {
    this.socket.emit('join', data);
  }
  sendMessage(data: any): void {
    this.socket.emit('message', data);
  }
  getMessage(): Observable<any> {
    return new Observable<{content: string, roomId: string, sender: string}>(observer => {
      this.socket.on('new-message', (data) => {
        observer.next(data);
      })

      return () => {
        console.log("disconnected")
        this.socket.disconnect();
      }
    });
  }

  actionTyping(){
    this.socket.emit('typing')
  }

  getStorage() {
    const storage = localStorage.getItem('chats');
    return storage ? JSON.parse(storage) : [];
  }

  setStorage(data: any) {
    localStorage.setItem('chats', JSON.stringify(data));
  }

  getMessagesByRoom(roomId: string):Observable<Array<Message>>{
    return this.http.get<Array<Message>>(`${chatApiUrl}/message/${roomId}`)
  }

  
}
