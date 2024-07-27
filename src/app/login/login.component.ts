import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any = '';
  password: any = '';
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  // 11:53

  Login() {
    console.log("login ", this.email, " ", this.password)

    if (this.email === "admin@gmail.com" && this.password === "123") {
      this.router.navigate(['/rooms', 'add']);
      // this.router.navigateByUrl('/rooms/add');
    }
  }

}
