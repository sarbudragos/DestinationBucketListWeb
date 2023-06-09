import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DestinationBucketListFrontend';

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit(): void { }

  goToLoginPage() {
    this.router.navigateByUrl('login');
  }

  goToRegisterPage() {
    this.router.navigateByUrl('register');
  }

  goToPublicListPage() {
    this.router.navigateByUrl('publiclist');
  }

  goToPrivateListPage() {
    this.router.navigateByUrl('privatelist');
  }

}
