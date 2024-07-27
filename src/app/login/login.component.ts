import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;
  constructor() { }

  ngOnInit(): void {
    
  }

  // 11:23

  Login(){
    if(this.email==="admin@gmail.com" && this.password==="123"){
      alert("login sucess ")
    }
  }

}
