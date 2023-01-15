import { Component, OnInit } from '@angular/core';
import { RegisterDTO } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInfo: RegisterDTO = new RegisterDTO()
  confirmPass: string = ""
  imageShow: any = ""
  messageStrengthPassword: string = ""

  passwordStrong:Number = -1

  constructor(
    private userService: UserService,
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  getInfor(event: Event){
    var name = (event.target as HTMLInputElement).name
    var value = (event.target as HTMLInputElement).value

    if (name == "firstName" || name == "lastName" || name == "email" || name == "phone" || name == "address" || name == "password"){
      this.userInfo[name] = value;
    }
    if (name == "confirmPassword"){
      this.confirmPass = value
    }
  }

  getInforGender(gender: string){
    this.userInfo.gender = gender
  }

  uploadImage(event: any){
    var reader = new FileReader()

    var file = event.target.files[0]

    this.userInfo.file = event.target.files[0]

    reader.readAsDataURL(file)
    reader.onload = (_event) => {
      this.imageShow = reader.result
    }
  }

  checkStrengthPassword(){
    if (this.userInfo.password == ""){
      return;
    }
    this.accountService.checkStrengthPassword(this.userInfo.password).subscribe(response => {
      this.passwordStrong = response
    })
  }

  submitRegister(){
    this.userService.registerUser(this.userInfo).subscribe(rep => {
      if (rep.success == true){
        this.router.navigate(['auth/login'])
      }
    })
  }

}
