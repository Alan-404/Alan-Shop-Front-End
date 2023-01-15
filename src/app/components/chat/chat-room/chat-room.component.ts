import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { CommonService } from 'src/app/services/common.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  user: User = new User()

  me: User = new User()

  messages: Array<Message> = []
  storageArray = []
  inputMessage: string = ""



  getPrevMessages(roomId: string) {
    this.chatService.getMessagesByRoom(roomId).subscribe(response => {
      this.messages = response
    })
  }

  getUser(id: string) {
    this.userService.getUserById(id).subscribe(response => {
      this.user = response
    })
  }



  config() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['with']) {
        this.userService.getUserById(params['with']).subscribe(rep => {
          if (rep.id != "") {
            this.user = rep
            this.userService.getUserByToken().subscribe(res => {
              this.me = res
              this.roomId = params['id']
              this.chatService.joinRoom({ roomId: this.roomId, userId: this.me.id })
              this.getPrevMessages(this.roomId)
              this.chatService.getMessage().subscribe(response => {
                console.log(response)
                this.messages.push(response)
              })
            })
          }
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


  actionInput(e: Event) {
    this.inputMessage = (e.target as HTMLInputElement).value
  }

  actionSend() {
    console.log(Date.now())
    this.chatService.sendMessage({ roomId: this.roomId, content: this.inputMessage, sender: this.getMyId() })
    this.inputMessage = ""
  }

  getMyId() {
    var id = ""
    this.commonService.userId$.subscribe(data => {
      id = data
    })

    return id
  }



}
