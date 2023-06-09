import { Component } from '@angular/core';
import { UserService } from '../services/user-service/user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  private token: string;
  constructor(private userService: UserService) { 
    this.userService = userService;
    this.token = "";
  }
  ngOnInit(): void { }

  loginUser() {
    let userName = (<HTMLInputElement>document.getElementById("usernameL")).value;
    let password = (<HTMLInputElement>document.getElementById("passwordL")).value;
    this.userService.loginUser(userName, password).subscribe(result => {this.token = result.token;});
    // redirect to private list page
  }

}
