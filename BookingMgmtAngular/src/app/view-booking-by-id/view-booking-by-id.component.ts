import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from '../Model/Booking';
import { BookingDetails } from '../Model/BookingDetails';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-booking-by-id',
  templateUrl: './view-booking-by-id.component.html',
  styleUrls: ['./view-booking-by-id.component.css']
})
export class ViewBookingByIdComponent implements OnInit {

  service:BookingService;
  foundBooking:Booking=null;
  foundStatus=null;
  bookings:Array<Booking>=[];
  bookingdetails: BookingDetails[] = [];
  
  
  constructor(service:BookingService) {
    this.service=service;
  }


  ngOnInit(): void {
    
  }

  findBookingById(bookingform){
    let bookingId=bookingform.value.bookingId;
    let response:Observable<Booking> =this.service.findBookingById(bookingId);
   response.subscribe((booking)=>{
    this.foundBooking=booking;
    this.foundStatus="Found";
   
    
     });
     
  
     let passengerUIN: string ="";
     for (let i = 0; i < this.foundBooking.noOfPassengers; i++) {
       if(passengerUIN!=""){
      passengerUIN = passengerUIN  +", "+ this.foundBooking.passengerList[i];}
      else{
        passengerUIN =""+this.foundBooking.passengerList[i];
      }
     }
    let bookingdetailobj = new BookingDetails(this.foundBooking.bookingId,this.foundBooking.userId, this.foundBooking.bookingDate, passengerUIN, this.foundBooking.ticketCost, this.foundBooking.flightNumber, this.foundBooking.noOfPassengers);
     this.bookingdetails.push(bookingdetailobj);
    
  }
}
