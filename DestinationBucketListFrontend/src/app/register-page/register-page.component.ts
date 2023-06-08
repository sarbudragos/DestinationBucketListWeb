import { Component } from '@angular/core';
import { UserService } from '../services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  constructor(private userService: UserService, private router: Router) { 
    this.userService = userService;
    this.router = router;
  }
  ngOnInit(): void { }

  registerUser(userName: string, password: string) {
    this.userService.registerUser(userName, password);
  }
}
