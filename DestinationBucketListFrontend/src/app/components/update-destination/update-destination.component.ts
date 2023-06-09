import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Destination } from 'src/app/models/Destination';
import { DestinationService } from 'src/app/services/destination-service/destination.service';

@Component({
  selector: 'app-update-destination',
  templateUrl: './update-destination.component.html',
  styleUrls: ['./update-destination.component.css']
})
export class UpdateDestinationComponent {
  destination: Destination = {
    id: 0,
    title: "",
    description: "",
    stayDate: { id: 0,
                startDate: new Date(),
                endDate: new Date() },
    location: { id: 0,
                country: "",
                zone: "" },
    image: "",
    isPublic: false
  };
  createForm = this.formBuilder.group(
    {
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      country: ['', Validators.required],
      zone: ['', Validators.required],
      image: ['', Validators.required],
    }
  );
  serverResponse: string|null = null;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService, 
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if(this.createForm.valid) {
      this.destinationService.modifyPrivateDestination(this.destination.id, this.destination)
    }
  }

  goToPrivateList(): void {
    this.router.navigate(["/privatelist"]);
  }

}