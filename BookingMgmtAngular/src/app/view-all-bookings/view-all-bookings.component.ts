import { Component, OnInit } from '@angular/core';
import { Booking } from '../Model/Booking';
import { BookingService } from '../booking.service';
import { BookingDetails } from '../Model/BookingDetails';

@Component({
  selector: 'app-view-all-bookings',
  templateUrl: './view-all-bookings.component.html',
  styleUrls: ['./view-all-bookings.component.css']
})
export class ViewAllBookingsComponent implements OnInit {

  bookings:Booking[]=[];
  bookingdetails:BookingDetails[]=[];
  __bookingService:BookingService;
  
constructor(__bookingService:BookingService)
{
  this.__bookingService=__bookingService;

}
  ngOnInit(): void {
    
  }
  view(bookingform)
  { console.log("All Booking Information:");
    this.__bookingService.fetchAllBookings().subscribe(booking=>
      {
        this.bookings=booking
  });
  

 
  for (let i = 0; i < this.bookings.length; i++) {
    let passengerUIN: string ="";
    for (let j = 0; j < this.bookings[i].noOfPassengers; j++) {
      if(passengerUIN!=""){
      passengerUIN = passengerUIN  + ", "+this.bookings[i].passengerList[j];}
      else{
        passengerUIN = ""+this.bookings[i].passengerList[j];
      }
    }
    console.log(passengerUIN);
  
 let bookingdetailobj = new BookingDetails(this.bookings[i].bookingId,this.bookings[i].userId, this.bookings[i].bookingDate, passengerUIN, this.bookings[i].ticketCost, this.bookings[i].flightNumber, this.bookings[i].noOfPassengers);
  this.bookingdetails.push(bookingdetailobj);
  }
  }
}

