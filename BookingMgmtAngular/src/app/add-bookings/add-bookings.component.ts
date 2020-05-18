import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from '../Model/Booking';
import { observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Passenger } from '../Model/Passenger';
import { User } from '../Model/User';
import { BookingResponse } from '../Model/BookingResponse';
import { Flight } from '../Model/Flight';
import { BookingRequest } from '../Model/BookingRequest';
import { BookingResponseView } from '../Model/BookingResponseView';



@Component({
  selector: 'app-add-bookings',
  templateUrl: './add-bookings.component.html',
  styleUrls: ['./add-bookings.component.css']
})
export class AddBookingsComponent implements OnInit {

  pass2flag = true;
  pass3flag = true;
  pass4flag = true;
  bookingConfirmFlag = false;
  passengerList: Passenger[] = [];
  passengerNames = [];
  passengerAges = [];
  bookingId: number;
  numberOfPassengers:number;
  bookingResponse:BookingResponse;
  bookingResponseView : BookingResponseView[]=[];
  bookingform = new FormGroup({
    numberOfPassengers: new FormControl('',
      {
        validators: Validators.required
      }),
    passengerName1: new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        Validators.pattern("([a-zA-Z]+( [a-zA-Z]+)*){2,30}")
      ])
    }),
    passengerName2: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("([a-zA-Z]+( [a-zA-Z]+)*){2,30}")
        ])

      }),
    passengerName3: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("([a-zA-Z]+( [a-zA-Z]+)*){2,30}")
        ])
      }),
    passengerName4: new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        Validators.pattern("([a-zA-Z]+( [a-zA-Z]+)*){2,30}")
      ])
    }
    ),
    passengerAge1: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("(?:|-)([1-9]{1,2}[0]?|100)")
        ])
      }),
    passengerAge2: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("(?:|-)([1-9]{1,2}[0]?|100)")
        ])
      }),
    passengerAge3: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("(?:|-)([1-9]{1,2}[0]?|100)")
        ])
      }),
    passengerAge4: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("(?:|-)([1-9]{1,2}[0]?|100)")
        ])
      }),
      passengerGender1: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerGender2: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerGender3: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerGender4: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerNumber1: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerNumber2: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerNumber3: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerNumber4: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      billingAddress: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      
    phoneNumber: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("[7-9][0-9]{9}")
        ])
      }),
      
  })
 
constructor(private bookingservice : BookingService) { }

  ngOnInit(): void {
    this.onChanges();
  }
  passengersCount() {
    this.numberOfPassengers = parseInt(this.bookingform.get('numberOfPassengers').value);
  }
  onChanges() {
    this.bookingform.get('numberOfPassengers').valueChanges
      .subscribe(selectedPassengers => {
        if (selectedPassengers == 1) {
          this.bookingform.get('passengerName1').enable();
          this.bookingform.get('passengerAge1').enable();
          this.bookingform.get('passengerGender1').enable();
          this.bookingform.get('passengerNumber1').enable();
          this.bookingform.get('passengerName2').disable();
          this.bookingform.get('passengerName3').disable();
          this.bookingform.get('passengerName4').disable();
          this.bookingform.get('passengerAge2').disable();
          this.bookingform.get('passengerAge3').disable();
          this.bookingform.get('passengerAge4').disable();
          this.bookingform.get('passengerGender2').disable();
          this.bookingform.get('passengerGender3').disable();
          this.bookingform.get('passengerGender4').disable();
          this.bookingform.get('passengerNumber2').disable();
          this.bookingform.get('passengerNumber3').disable();
          this.bookingform.get('passengerNumber4').disable();
          this.bookingform.get('passengerName2').reset();
          this.bookingform.get('passengerAge2').reset();
          this.bookingform.get('passengerGender2').reset();
          this.bookingform.get('passengerNumber2').reset();
          this.bookingform.get('passengerName3').reset();
          this.bookingform.get('passengerAge3').reset();
          this.bookingform.get('passengerGender3').reset();
          this.bookingform.get('passengerNumber3').reset();
          this.bookingform.get('passengerName4').reset();
          this.bookingform.get('passengerAge4').reset();
          this.bookingform.get('passengerGender4').reset();
          this.bookingform.get('passengerNumber4').reset();
        }
        else if (selectedPassengers == 2) {
          this.bookingform.get('passengerName1').enable();
          this.bookingform.get('passengerAge1').enable();
          this.bookingform.get('passengerGender1').enable();
          this.bookingform.get('passengerNumber1').enable();
          this.bookingform.get('passengerName2').enable();
          this.bookingform.get('passengerAge2').enable();
          this.bookingform.get('passengerGender2').enable();
          this.bookingform.get('passengerNumber2').enable();
          this.bookingform.get('passengerName3').disable();
          this.bookingform.get('passengerName4').disable();
          this.bookingform.get('passengerAge3').disable();
          this.bookingform.get('passengerAge4').disable();
          this.bookingform.get('passengerGender3').disable();
          this.bookingform.get('passengerGender4').disable();
          this.bookingform.get('passengerNumber3').disable();
          this.bookingform.get('passengerNumber4').disable();
          this.bookingform.get('passengerName3').reset();
          this.bookingform.get('passengerAge3').reset();
          this.bookingform.get('passengerGender3').reset();
          this.bookingform.get('passengerNumber3').reset();
          this.bookingform.get('passengerName4').reset();
          this.bookingform.get('passengerAge4').reset();
          this.bookingform.get('passengerGender4').reset();
          this.bookingform.get('passengerNumber4').reset();

        }
        else if (selectedPassengers == 3) {
          this.bookingform.get('passengerName1').enable();
          this.bookingform.get('passengerAge1').enable();
          this.bookingform.get('passengerGender1').enable();
          this.bookingform.get('passengerNumber1').enable();
          this.bookingform.get('passengerName2').enable();
          this.bookingform.get('passengerAge2').enable();
          this.bookingform.get('passengerGender2').enable();
          this.bookingform.get('passengerNumber2').enable();
          this.bookingform.get('passengerName3').enable();
          this.bookingform.get('passengerAge3').enable();
          this.bookingform.get('passengerGender3').enable();
          this.bookingform.get('passengerNumber3').enable();
          this.bookingform.get('passengerName4').disable();
          this.bookingform.get('passengerAge4').disable();
          this.bookingform.get('passengerGender4').reset();
          this.bookingform.get('passengerNumber4').reset();
        }
        else{
          this.bookingform.get('passengerName1').enable();
          this.bookingform.get('passengerAge1').enable();
          this.bookingform.get('passengerGender1').enable();
          this.bookingform.get('passengerNumber1').enable();
          this.bookingform.get('passengerName2').enable();
          this.bookingform.get('passengerAge2').enable();
          this.bookingform.get('passengerGender2').enable();
          this.bookingform.get('passengerNumber2').enable();
          this.bookingform.get('passengerName3').enable();
          this.bookingform.get('passengerAge3').enable();
          this.bookingform.get('passengerGender3').enable();
          this.bookingform.get('passengerNumber3').enable();
          this.bookingform.get('passengerName4').enable();
          this.bookingform.get('passengerAge4').enable();
          this.bookingform.get('passengerGender4').reset();
          this.bookingform.get('passengerNumber4').reset();
        }
      });
    }
      addBooking()

      {
        let passengerName1 = this.bookingform.get('passengerName1').value;
        let passengerAge1 = this.bookingform.get('passengerAge1').value;
        let passengerName2 = this.bookingform.get('passengerName2').value;
        let passengerAge2 = this.bookingform.get('passengerAge2').value;
        let passengerName3 = this.bookingform.get('passengerName3').value;
        let passengerAge3 = this.bookingform.get('passengerAge3').value;
        let passengerName4 = this.bookingform.get('passengerName4').value;
        let passengerAge4 = this.bookingform.get('passengerAge4').value;
        
        // if (passengerName1 != null) {
        //   this.passengerList[0].passengerName= "Akansha";
        //   this.passengerList[0].passengerAge= 21;
        //   this.passengerList[0].passengerUIN=1;
        //   this.passengerList[0].gender="Female";
          
        // }
      //   // if (passengerName2 != null) {
      //   //   this.passengerNames.push(passengerName2);
      //   //   this.passengerAges.push(passengerAge2);
          
      //   // }
      //   // if (passengerName3 != null) {
      //   //   this.passengerNames.push(passengerName3);
      //   //   this.passengerAges.push(passengerAge3);
          
      //   // }
      //   // if (passengerName4 != null) {
      //   //   this.passengerNames.push(passengerName4);
      //   //   this.passengerAges.push(passengerAge4);
         
      //   // }
      //   let phoneNumber = this.bookingform.get('phoneNumber').value;
      //   this.bookingId = Math.floor(Math.random() * 10000000) + 1;

      let passenger1=new Passenger(1000005,"Akansha",21,"Female",15,1);
      this.passengerList.push(passenger1);

      let booking = new BookingRequest(235,"02-11-2020",this.passengerList,5000,1234,2,"Noida","Delhi","Pune",9582880603);

      this.bookingservice.addBookings(booking).subscribe((booking) => {
        this.bookingResponse = booking;
        console.log(this.bookingResponse);
        
      })
      let pnrNumber="";
      let passengerName="";
      let passengerAge="";
      let passengerUIN="";
      let luggage= "";
       for(let i=0;i<this.bookingResponse.passengerList.length;i++){
         if(pnrNumber!=""){
          pnrNumber = pnrNumber+", "+this.bookingResponse.passengerList[i].pnrNumber;
          passengerName = passengerName+", "+this.bookingResponse.passengerList[i].passengerName;
          passengerAge = passengerAge+", "+this.bookingResponse.passengerList[i].passengerAge;
          passengerUIN = passengerUIN+", "+this.bookingResponse.passengerList[i].passengerUIN;
          luggage = luggage+", "+this.bookingResponse.passengerList[i].luggage;
         }
         else{
          pnrNumber =""+ this.bookingResponse.passengerList[i].pnrNumber;
          passengerName =""+this.bookingResponse.passengerList[i].passengerName;
          passengerAge =""+this.bookingResponse.passengerList[i].passengerAge;
          passengerUIN =""+this.bookingResponse.passengerList[i].passengerUIN;
          luggage = ""+this.bookingResponse.passengerList[i].luggage;
         }
       }
       
       

       let response = new BookingResponseView(this.bookingResponse.flightNumber,this.bookingResponse.source,this.bookingResponse.destination,this.bookingResponse.arrivalTime,this.bookingResponse.departureTime,this.bookingResponse.userId,9454545477, this.bookingResponse.billingAddress,pnrNumber, passengerName, passengerAge,passengerUIN, luggage);
    
       this.bookingResponseView.push(response);
       console.log(this.bookingResponseView);
       
      }
     }
  