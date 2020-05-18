import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingByIdComponent } from './view-booking-by-id.component';

describe('ViewBookingByIdComponent', () => {
  let component: ViewBookingByIdComponent;
  let fixture: ComponentFixture<ViewBookingByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookingByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
