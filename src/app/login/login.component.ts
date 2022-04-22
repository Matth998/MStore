import { UserLogin } from './../model/UserLogin';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();

  constructor(

    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {

    window.scroll(0, 0)

  }

  Login(){

    this.authService.Login(this.userLogin).subscribe((resp: UserLogin) => {

      this.userLogin = resp;

      environment.id = this.userLogin.id;
      environment.name = this.userLogin.name;
      environment.photo = this.userLogin.photo;
      environment.type = this.userLogin.type;
      environment.token = this.userLogin.token;

      this.router.navigate(["/products"]);

    }, error => {if(error.status == 500 || error.status == 401){

      alert("Your email or password is incorrect");

    }
  })

  }

}
