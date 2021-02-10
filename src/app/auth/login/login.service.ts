import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from '../auth.service';
import { LoginEndpointService } from './login-endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private loginEndpoint: LoginEndpointService) { }

  loginValidation(user : User) {
    return this.loginEndpoint.getValidUserTokenEndpoint<string>(user);
  }
}
