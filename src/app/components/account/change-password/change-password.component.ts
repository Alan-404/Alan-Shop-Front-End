import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChangePasswordDTO } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  @Output() handleForm = new EventEmitter<void>()

  passwordData: ChangePasswordDTO = new ChangePasswordDTO()
  confirmPassword: string = ""

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  getInfo(event: Event){
    var name = (event.target as HTMLInputElement).name
    var value = (event.target as HTMLInputElement).value
    if (name == "currentPassword" || name == "newPassword"){
      this.passwordData[name] = value
    }

    else if (name == "confirmPassword"){
      this.confirmPassword = value
    }
  }

  closeForm(){
    this.handleForm.emit()
  }

  submitchangePassword(){
    this.accountService.changePassword(this.passwordData).subscribe(response => {
      if (response.success){
        this.closeForm()
      }
    })
  }
}
