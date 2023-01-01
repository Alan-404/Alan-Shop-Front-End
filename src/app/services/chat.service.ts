import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: Socket
  private url = 'http://localhost:5000'

  constructor() { 
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }

  joinRoom(data: any): void {
    this.socket.emit('join', data);
  }
  sendMessage(data: any): void {
    this.socket.emit('message', data);
  }
  getMessage(): Observable<any> {
    return new Observable<{message: string, roomId: string, senderId: string}>(observer => {
      console.log(observer)
      this.socket.on('new-message', (data) => {
        console.log("OK")
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


  
}
