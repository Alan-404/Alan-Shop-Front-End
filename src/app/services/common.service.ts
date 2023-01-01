import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  numProduct: Number = 0;


  private data = new BehaviorSubject(0)
  data$ = this.data.asObservable()

  private username = new BehaviorSubject("")
  username$ = this.username.asObservable()

  private profileIndex = new BehaviorSubject(0)
  profileIndex$ = this.profileIndex.asObservable()

  private userId = new BehaviorSubject('')
  userId$ = this.userId.asObservable()

  constructor() { }

  actionNumProducts(num: Number){
    this.numProduct = num
  }

  changeData(data: number){
    this.data.next(data)
  }

  updateName(name: string){
    this.username.next(name)
  }

  changePage(index: number){
    this.profileIndex.next(index)
  }

  updateUserId(userId: string){
    this.userId.next(userId)
  }

}
