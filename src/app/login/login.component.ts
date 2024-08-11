import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any = '';
  password: any = '';
  constructor(private router: Router, private logservice: LoginService) { }

  ngOnInit(): void {

  }

  // 11:53
  // this.router.navigateByUrl('/rooms/add');

  Login() {
    if (this.logservice.Login(this.email, this.password)) {
      console.log('login component ')
      console.log("email ", this.email, " password ", this.password)

      this.router.navigateByUrl('/rooms/add');
    }
  }

}
