import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationService } from 'src/app/services/destination-service/destination.service';

@Component({
  selector: 'app-delete-destination',
  templateUrl: './delete-destination.component.html',
  styleUrls: ['./delete-destination.component.css']
})
export class DeleteDestinationComponent {
  private token: String;
  constructor(private destService: DestinationService, private router: Router) { 
    this.destService = destService;
    this.router = router;
    this.token = "";
  }
  ngOnInit(): void { }
}
