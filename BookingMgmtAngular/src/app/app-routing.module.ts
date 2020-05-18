import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllBookingsComponent } from './view-all-bookings/view-all-bookings.component';
import { ViewBookingByIdComponent } from './view-booking-by-id/view-booking-by-id.component';
import { AddBookingsComponent } from './add-bookings/add-bookings.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';


const routes: Routes = [
  {path: '', component: AddBookingsComponent},
  {path: 'addbookings', component : AddBookingsComponent},
  {path: 'viewbookings', component : ViewAllBookingsComponent},
  {path: 'viewbookingbyid', component : ViewBookingByIdComponent},
  {path: 'deletebooking', component : DeleteBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
