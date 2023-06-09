import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Destination } from '../../models/Destination';
import { StayDates } from '../../models/StayDates';
import { DestinationService } from '../../services/destination-service/destination.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent {
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
      this.destinationService.addPrivateDestination(this.destination)
    }
  }

  goToPrivateList(): void {
    this.router.navigate(["/privatelist"]);
  }

  goBack(): void {
    this.location.back();
  }

}