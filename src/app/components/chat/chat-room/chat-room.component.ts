import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  user: User = new User()


  messages: Array<{senderId: string, roomId: string, message: string}> = []
  storageArray = []
  inputMessage: string = ""

  getUser(id: string){
    this.userService.getUserById(id).subscribe(response => {
      console.log(response)
      this.user = response
    })
  }


  config(){
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['with']){
        this.getUser(params['with'])
      }
      if (params['id']){
        this.roomId = params['id']
        this.chatService.joinRoom({roomId: this.roomId})
        this.chatService.getMessage().subscribe(response => {
          console.log(response)
          this.messages.push(response)
          console.log(this.messages)
        })
      }
    })
  }

  roomId: string = ""
  constructor(
    private chatService: ChatService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.config()
  }


  actionInput(e: Event){
    this.inputMessage = (e.target as HTMLInputElement).value
  }

  actionSend(){
    this.chatService.sendMessage({roomId: this.roomId, message: this.inputMessage, senderId: this.getMyId()})
    this.inputMessage = ""
  }

  getMyId(){
    var id = ""
    this.commonService.userId$.subscribe(data => {
      id = data
    })

    return id
  }

}
