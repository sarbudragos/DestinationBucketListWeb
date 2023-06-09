import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleetDestinationComponent } from './delete-destination.component';

describe('DeleetDestinationComponent', () => {
  let component: DeleetDestinationComponent;
  let fixture: ComponentFixture<DeleetDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleetDestinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleetDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
