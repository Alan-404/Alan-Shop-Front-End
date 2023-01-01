import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CommonService } from 'src/app/services/common.service';
import { makeUrlAvatarUser } from 'src/app/utils/lib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  lstItems = ['Thông Tin Người Dùng', "Quản Lý Đơn Hàng"]
  lstIcons = ['person', 'reorder']
  urls = ['profile', 'bill']

  user = new User()

  make = makeUrlAvatarUser

  indexChoiced: number = 0

  constructor(
    private userService: UserService,
    private commonService: CommonService,
    private router: Router
  ) { }

  checkUrl(){
    for (let [index, value] of this.urls.entries()){
      if (this.router.url.match(value)){
        this.indexChoiced = index
        return
      }
    }
  }

  getUser(){
    this.userService.getUserByToken().subscribe(response => {
      console.log(response)
      this.user = response
      this.commonService.updateUserId(this.user.id)
    })
  }

  ngOnInit(): void {
    this.getUser()
    this.getPage()
    this.checkUrl()
  }

  changePosition(index: number){
    this.indexChoiced = index
    this.router.navigate(['/user/' + this.urls[index]])
  } 

  getPage(){
    var temp = 0
    this.commonService.profileIndex$.subscribe(data => {
      temp = data
    })

    return temp
  }

}
