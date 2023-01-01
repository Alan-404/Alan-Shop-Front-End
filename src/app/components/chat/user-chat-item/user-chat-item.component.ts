import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-chat-item',
  templateUrl: './user-chat-item.component.html',
  styleUrls: ['./user-chat-item.component.css']
})
export class UserChatItemComponent implements OnInit {
  @Input() user: User = new User()
  constructor() { }

  ngOnInit(): void {
  }

}
