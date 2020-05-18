import { User } from './User';
import { Passenger } from './Passenger';
import { Flight } from './Flight';


export class Booking
{   bookingId:number;
    userId: number;
    bookingDate:string;
    passengerList: number[];
    ticketCost:number;
    flightNumber:number;
    noOfPassengers:number;
    constructor(
    bookingId:number,
    userId:number,
    bookingDate:string,
    passengerList: number[],
    ticketCost:number,
    flightNumber:number,
    noOfPassengers:number    )
    {
this.bookingId=bookingId;
this.userId=userId;
this.bookingDate=bookingDate;
this.passengerList=passengerList;
this.ticketCost=ticketCost;
this.flightNumber=flightNumber;
this.noOfPassengers=noOfPassengers;
    }

}