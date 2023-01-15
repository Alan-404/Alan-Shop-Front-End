import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { apiUrl } from 'src/app/utils/constants';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { DistributorService } from 'src/app/services/distributor.service';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = new User();
  avatar: string = ""
  checkRole: boolean = false;
  checkDistributorRole: boolean = false

  numProduct: Number = 0

  constructor(
    private userService: UserService,
    private router: Router,
    private roleService: RoleService,
    private distributorService: DistributorService,
    private cartService: CartService,
    private commonService: CommonService
  ) { }

  getUser(){
    this.userService.getUserByToken().subscribe(response => {
      this.user = response
      this.avatar = apiUrl + "/user/avatar?id=" + this.user.id
      this.commonService.updateName(this.user.firstName + " " + this.user.lastName)
      this.commonService.updateUserId(this.user.id)
    })
  }

  checkUserRole(){
    this.roleService.getRole().subscribe(response => {
      this.checkRole = response
    })
  }

  checkDistributor(){
    this.distributorService.checkDistributor().subscribe(response => {
      this.checkDistributorRole = response
    })
  }

  getNumProduct(){
    this.cartService.getNumProductInCart().subscribe(res => {
      this.numProduct = res
      this.commonService.changeData(res)
    })
  }
  

  ngOnInit(): void {
    if (localStorage.getItem('shop')){
      this.getUser()
      this.checkUserRole()
      this.checkDistributor()
      this.getNumProduct()
      this.getNum()
    }
  }

  goProfile(){
    this.router.navigate(['user/profile'])
  }

  goAdminPage(){
    this.router.navigate(['admin'])
  }

  getNum(){
    var temp = 0;
    this.commonService.data$.subscribe(data => {
      temp = data
    })
    return temp
  }

  logoutAccount(){
    localStorage.removeItem('shop')
    this.router.navigate(['/auth/login'])
  }

  getUserName(){
    var temp = ""
    this.commonService.username$.subscribe(data => {
      temp = data
    })
    return temp
  }

  goChatPage(){
    console.log(localStorage.getItem('chat-with'))
    if (localStorage.getItem('chat-with') && localStorage.getItem('room-chat')){
      this.router.navigate(['/chat/room'], {queryParams: {'id': localStorage.getItem('room-chat'), 'with': localStorage.getItem('chat-with')}})
    }
    else{
      this.router.navigate(['/chat'])
    }
  }

}
