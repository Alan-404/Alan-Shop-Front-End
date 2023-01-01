import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-auth',
  templateUrl: './edit-auth.component.html',
  styleUrls: ['./edit-auth.component.css']
})
export class EditAuthComponent implements OnInit {
  @Input() user: User = new User()

  openChangePasswordForm: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  handleChangePass(){
    this.openChangePasswordForm = !this.openChangePasswordForm
  }

}
