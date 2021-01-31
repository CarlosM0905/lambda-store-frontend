import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    const user: User = {
      user: this.user,
      password: this.password
    }

    this.authService.login(user)
    .then(((results: any) => {
      console.log(results);
        if(results.ok){
          if(!localStorage.getItem('isUser')){
            this.router.navigateByUrl('/credit-card');
            localStorage.setItem('isUser', results.isUser);
          }
        }
    }))
    .catch(err => {
      console.log(err);
      Swal.fire('Error', err.error.message, 'error')
    })
    ;
  }

  mostrarDatos(){
    console.log(this.user);
    console.log(this.password);
  }

}
