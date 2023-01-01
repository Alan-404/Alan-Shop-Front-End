import { Component, OnInit, Input } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CommonService } from 'src/app/services/common.service';
import { makeUrlAvatarUser } from 'src/app/utils/lib';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: User = new User()

  checkGenderMale: boolean = true
  constructor(
    private userService: UserService,
    private commonService: CommonService
  ) { }

  make = makeUrlAvatarUser

  getUser(){
    this.commonService.userId$.subscribe(data => {
      this.userService.getUserByToken().subscribe(response => {
        this.user = response
      })
    })
  }

  ngOnInit(): void {
    this.getUser()
  }

  getInfo(event: Event){
    var name = (event.target as HTMLInputElement).name
    var value = (event.target as HTMLInputElement).value

    if (name == "firstName"){
      this.user.firstName = value
    }
    else if (name == "lastName"){
      this.user.lastName = value
    }
    else if (name == "phone"){
      this.user.phone = value
    }
    else if (name == "address"){
      this.user.address = value
    }
  }

  getGender(e: MatRadioChange){
    this.user.gender = e.value
  }

  

  submitUpdateInfoUser(){
    this.userService.editUserInfo(this.user).subscribe(response => {
      if (response.success){
        this.commonService.updateName(this.user.firstName + " " + this.user.lastName)
      }
    })
  }
}
