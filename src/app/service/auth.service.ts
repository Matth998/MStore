import { UserModel } from './../model/UserModel';
import { UserLogin } from './../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

    private http: HttpClient

  ) {}

  Login(userLogin: UserLogin): Observable<UserLogin>{

    return this.http.post<UserLogin>("http://localhost:8080/user/login", userLogin);

  }

  Register(userModel: UserModel): Observable<UserModel>{

    return this.http.post<UserModel>("http://localhost:8080/user/register", userModel);

  }

  Update(userModel: UserModel): Observable<UserModel>{

    return this.http.put<UserModel>("http://localhost:8080/user/update", userModel);

  }

  GetByIdUser(id: number): Observable<UserModel>{

    return this.http.get<UserModel>(`http://localhost:8080/user/${id}`);

  }

  Logged() {

    let ok = false;

    if (environment.token != '') {

      ok = true;

    }

    return ok;

  }

  LoggedOut(){

    let ok = false;

    if(environment.token === '')

    ok = true;

    return ok;


  }

}
