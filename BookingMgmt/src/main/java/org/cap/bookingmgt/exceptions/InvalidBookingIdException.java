package org.cap.bookingmgt.exceptions;

/***
 * @author Akansha Prasad
 */
public class InvalidBookingIdException extends RuntimeException {
	public InvalidBookingIdException(String msg) {
		super(msg);
	}
}
