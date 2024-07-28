import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  constructor() { }

  Login(email: string, password: string) {
    if (email === "admin@gmail.com" && password === "123") {

      console.log('login service  ')
      console.log("email ", email, " password ", password)


      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

}
