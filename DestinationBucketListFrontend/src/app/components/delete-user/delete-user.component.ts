import { Component } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  private token: String;
  constructor(private userService: UserService, private router: Router) { 
    this.userService = userService;
    this.router = router;
    this.token = "";
  }
  ngOnInit(): void { }

  deleteUser() {
    this.userService.deleteAccount().subscribe();
  }
}
