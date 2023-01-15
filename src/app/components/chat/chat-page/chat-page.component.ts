import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { ChatRoomService } from 'src/app/services/chat-room.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  users: Array<User> = []

  choiced: string = ""
  constructor(
    private userService: UserService,
    private commonService: CommonService,
    private router: Router,
    private chatRoomService: ChatRoomService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response
    })
  }

  checkSameUserId(userId: string){
    var check = false
    this.commonService.userId$.subscribe(data => {
      if (userId == data){
        check = true
      }
    })

    return check
  }

  goChatRoom(id: string){
    var my = ""
    this.commonService.userId$.subscribe(data => {
      my = data
    })
    this.chatRoomService.entryRoom(my, id).subscribe(response => {
      if (response.success){
        localStorage.setItem('room-chat', response.room._id)
        localStorage.setItem('chat-with', id)
        this.router.navigate(['/chat/room'], {queryParams: {'id': response.room._id, 'with': id}})
      }
    })
    //this.router.navigate(['/chat/room'], {queryParams: {id: id}})
  }


}
