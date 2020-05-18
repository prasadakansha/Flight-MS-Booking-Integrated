import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from '../Model/Booking';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnInit {
 
  constructor(private service:BookingService) {  }

  foundBooking : Booking;
  bookingCancelFlag = false;
  refundMoney : number;
  ngOnInit(): void {
   
    
  }
  deleteBookingById(bookingform)
  {
    let bookingId=bookingform.value.bookingId;
  this.service.findBookingById(bookingId).subscribe((booking)=>{
     this.foundBooking=booking;
    
      });
      this.refundMoney = this.foundBooking.ticketCost;
      this.refundMoney = this.refundMoney - (0.80*this.foundBooking.ticketCost);
    let response:Observable<boolean>=this.service.deleteBookingById(bookingId);
    response.subscribe(()=>
    {
      console.log("Deleted!!!");
      this.bookingCancelFlag = true;
    });
   
  }
}
  