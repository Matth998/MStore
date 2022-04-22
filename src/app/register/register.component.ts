import { UserModel } from './../model/UserModel';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userModel: UserModel = new UserModel();
  confirmePassword: string;

  constructor(

    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit(){

    window.scroll(0,0)

  }

  ConfirmPassword(event:any){

    this.confirmePassword = event.target.value;

  }

  Register(){

    this.userModel.type = "normal";

    if(this.userModel.password != this.confirmePassword){

      alert("Passwords must match!")

    }else{

      this.authService.Register(this.userModel).subscribe((resp: UserModel) =>{

        this.userModel = resp;
        this.router.navigate(["/login"]);
        alert("User registered successfully!");

      })

    }

  }

}
