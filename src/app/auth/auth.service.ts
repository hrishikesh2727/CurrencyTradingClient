import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';


import { AuthData } from './auth-data.model';
import { LoginService } from './login/login.service';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User = new User();

  constructor(private router: Router, private loginService: LoginService) {}

  registerUser(authData: AuthData) {
    // this.user = {
    //   email: authData.email,
    //   userId: Math.round(Math.random() * 10000).toString()
    // };
    this.authSuccessfully();
  }

  
  login(authData: AuthData) {
    
    debugger;
    this.user.userName = authData.email;
    this.user.email = authData.email;

    this.loginService.loginValidation(this.user).subscribe(
      results => 
      console.log(results), 
      error => console.log(error)
      );
    this.authSuccessfully();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  get accessToken(): string {
    return null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
