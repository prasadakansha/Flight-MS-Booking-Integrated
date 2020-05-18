import { Injectable } from '@angular/core';
import { Booking } from './Model/Booking';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import {Http, Response, Headers,RequestOptions} from '@angular/http';
import { BookingResponse } from './Model/BookingResponse';
import { HttpClient } from '@angular/common/http';
import { BookingRequest } from './Model/BookingRequest';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private client:Http ){
  
  }
  
  private headers = new Headers({'Content-Type' : 'application/json'});
  private options  = new RequestOptions({headers: this.headers});
  baseBookingUrl="http://localhost:8087/bookings";
  addBookings(booking : BookingRequest)
  {
    return this.client.post(this.baseBookingUrl+'/add', JSON.stringify(booking) ,this.options).pipe(map((response : Response)=>response.json()));

    }

 fetchAllBookings()
 {
   
  return this.client.get(this.baseBookingUrl+'/view/').pipe(map((response : Response) => response.json()));
   
 }
 
 findBookingById(bookingId:number){
  return this.client.get(this.baseBookingUrl+'/view/'+bookingId).pipe(map((response : Response) => response.json()));
 }
 deleteBookingById(bookingId:number){
  return this.client.delete(this.baseBookingUrl+'/delete/'+bookingId).pipe(map((response : Response) => response.json()));

}
}
