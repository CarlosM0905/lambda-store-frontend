import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }


  public login(user: User){
     return this.http.post(environment.BACKEND_URL + '/login', user).toPromise();
    
  }

}
