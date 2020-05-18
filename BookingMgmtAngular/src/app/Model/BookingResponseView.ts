import { Flight } from './Flight';
import { Passenger } from './Passenger';
import { User } from './User';

export class BookingResponseView {
    flightNumber: number;
    source:String;
    destination:String;
    arrivalTime:String;
    departureTime:String;
    
    userId: number;
    userPhone : number;
    billingAddress:String;
    pnrNumber:string;
    passengerName:string;
    passengerAge: string;
     passengerUIN:string;
     luggage: string;
    constructor(flightNumber:number,
        source:String,
        destination:String,
        arrivalTime:String,
        departureTime:String,
        userId:number,
        userPhone : number,
        billingAddress:String,
        pnrNumber:string,
    passengerName:string,
    passengerAge: string,
     passengerUIN:string,
     luggage: string) {
            this.flightNumber=flightNumber;
            this.source=source;
            this.destination=destination;
            this.arrivalTime=arrivalTime;
            this.departureTime=departureTime;
            this.userId = userId;
            this.userPhone = userPhone;
            this.billingAddress=billingAddress;
            this.pnrNumber=pnrNumber;
            this.passengerName=passengerName;
            this.passengerAge=passengerAge;
            this.passengerUIN=passengerUIN;
            this.passengerUIN=passengerUIN;
            this.luggage=luggage;
    }
}