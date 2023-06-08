import { Component } from '@angular/core';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private userService: UserService) { 
    this.userService = userService;
  }
  ngOnInit(): void { }

  loginUser(userName: string, password: string) {
    console.log("User name: " + userName + " Password: " + password + " from login-page.component.ts loginUser() s");
    if (this.userService.loginUser(userName, password))
      alert("Login successful!");
    else
      alert("Login failed!");
  }
  
}
