import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-chat-info',
  templateUrl: './user-chat-info.component.html',
  styleUrls: ['./user-chat-info.component.css']
})
export class UserChatInfoComponent implements OnInit {
  @Input() user = new User()
  constructor() { }

  ngOnInit(): void {
  }

}
