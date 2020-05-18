import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookingsComponent } from './add-bookings/add-bookings.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';
import { BookingService } from './booking.service';
import { ViewAllBookingsComponent } from './view-all-bookings/view-all-bookings.component';
import { ViewBookingByIdComponent } from './view-booking-by-id/view-booking-by-id.component';
import { Http, HttpModule } from '@angular/http';
import { TicketGenerationComponent } from './ticket-generation/ticket-generation.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookingsComponent,
    DeleteBookingComponent,
    ViewAllBookingsComponent,
    ViewBookingByIdComponent,
    TicketGenerationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
