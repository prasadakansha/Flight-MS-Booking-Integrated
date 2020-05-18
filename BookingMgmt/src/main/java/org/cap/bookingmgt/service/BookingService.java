package org.cap.bookingmgt.service;

import java.math.BigInteger;
import java.util.List;

import org.cap.bookingmgt.entities.Booking;

/***
 * @author Akansha Prasad
 */
/***
 * A service layer is an additional layer in an application that mediates
 * communication between a controller and repository layer. The service layer
 * contains business logic. In particular, it contains validation logic.
 */
public interface BookingService {
	Booking addBooking(Booking booking);

	Booking modifyBooking(Booking booking);

	Booking viewBooking(BigInteger bookingId);

	List<Booking> viewBooking();

	boolean deleteBooking(BigInteger bookingId);
}
