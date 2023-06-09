import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../services/destination-service/destination.service';
import { Destination } from '../models/Destination';
import { UserService } from '../services/user-service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-private-list',
  templateUrl: './private-list.component.html',
  styleUrls: ['./private-list.component.css']
})
export class PrivateListComponent implements OnInit{
  destinations: Destination[] = [];
  token: string = "";
  constructor(private destinationService: DestinationService, private userService: UserService,     private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.userService.getToken();
    // this.destinationService.getPrivateDestinations(this.token).subscribe((result: Destination[]) => {this.destinations = result;});
    this.activatedRoute.queryParams
      .subscribe(
        params => {
          this.destinationService.getPrivateDestinations(this.token).subscribe((result: Destination[]) => {this.destinations = result;});
        }
      );
  }

}
