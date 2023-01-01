import { Component, OnInit } from '@angular/core';
import { LoginDTO } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: LoginDTO = new LoginDTO();

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getInfo = (event: Event) => {
    var name = (event.target as HTMLInputElement).name
    var value = (event.target as HTMLInputElement).value
    if (name == "email" || name == "password"){
      this.loginData[name] = value
    }
  }

  submit = () => {
    console.log(this.loginData)
    this.accountService.loginAccount(this.loginData).subscribe(response => {
      if (response.success){
        localStorage.setItem('shop', response.accessToken)
        this.router.navigate(['/']).then(() => window.location.reload())
      }
    })
  }

  

}
