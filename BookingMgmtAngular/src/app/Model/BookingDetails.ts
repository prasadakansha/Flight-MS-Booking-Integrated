


export class BookingDetails {
    
    bookingId:number;
    userId: number;
    bookingDate:string;
    passengerList:string;
    ticketCost:number;
    flightNumber:number;
    noOfPassengers:number;
    constructor(
    bookingId:number,
    userId:number,
    bookingDate:string,
    passengerList:string,
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