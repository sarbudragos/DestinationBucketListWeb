import { Component, OnInit } from '@angular/core';
import { Destination } from '../models/Destination';
import { DestinationService } from '../services/destination-service/destination.service';

@Component({
  selector: 'app-public-list',
  templateUrl: './public-list.component.html',
  styleUrls: ['./public-list.component.css']
})
export class PublicListComponent implements OnInit{
    destinations: Destination[] = [];
    constructor(private destinationService: DestinationService) { }
  
    ngOnInit(): void {
      this.destinationService.getPublicDestinations().subscribe((result: Destination[]) => {this.destinations = result;});
    }

}
