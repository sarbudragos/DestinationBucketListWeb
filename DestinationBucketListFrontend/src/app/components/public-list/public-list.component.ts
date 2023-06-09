import { Component, OnInit } from '@angular/core';
import { Destination } from '../../models/Destination';
import { DestinationService } from '../../services/destination-service/destination.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-public-list',
  templateUrl: './public-list.component.html',
  styleUrls: ['./public-list.component.css']
})
export class PublicListComponent implements OnInit{
    destinations: Destination[] = [];
    token: String = "";
    constructor(private destinationService: DestinationService, private userService: UserService,     private router: Router,
    private activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.token = this.userService.getToken();
      this.activatedRoute.queryParams
        .subscribe(
          params => {
            this.destinationService.getPublicDestinations().subscribe((result: Destination[]) => {this.destinations = result;});
          }
        );
      }
    
    goToAddPage(){
      this.router.navigate(['/add-destination']);
    }

    
  deletePublicDestination(id: number){
    this.destinationService.deletePublicDestination(id);
  }

  updatePublicDest(id:number){
    this.router.navigate(['/update/{id}', id]);
  }

}
