package org.cap.bookingmgt.entities;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/***
 * @author Akansha Prasad
 */
/***
 * JavaBeans are classes that encapsulate many objects into a single object (the
 * bean). It is a java class that should follow following conventions: 1.Must
 * implement serializable. 2.It should have a public no-arg constructor. 3.All
 * properties in java bean must be private with public getters and setter
 * methods.
 */

@Entity
@Table(name = "bookings")
public class Booking {
	@Id
	@GeneratedValue
	private BigInteger bookingId;
	private BigInteger userId;
	private LocalDate bookingDate;
	@ElementCollection
	private List<BigInteger> passengerList = new ArrayList<>();
	private double ticketCost;
	private BigInteger flightNumber;
	private int noOfPassengers;

	/***
	 *
	 * @return bookingId
	 */
	public BigInteger getBookingId() {
		return bookingId;
	}

	/***
	 * set Booking Id
	 * 
	 * @param bookingId
	 */

	public void setBookingId(BigInteger bookingId) {
		this.bookingId = bookingId;
	}

	/***
	 *
	 * @return userId
	 */
	public BigInteger getUserId() {
		return userId;
	}

	/***
	 * set userId
	 * 
	 * @param userId
	 */
	public void setUserId(BigInteger userId) {
		this.userId = userId;
	}

	/***
	 *
	 * @return bookingDate
	 */
	public LocalDate getBookingDate() {
		return bookingDate;
	}

	/***
	 * set bookingDate
	 * 
	 * @param bookingDate
	 */
	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}

	/***
	 *
	 * @return passengerList
	 */
	public List<BigInteger> getPassengerList() {
		return passengerList;
	}

	/***
	 * set passengerList
	 * 
	 * @param passengerList
	 */
	public void setPassengerList(List<BigInteger> passengerList) {
		this.passengerList = passengerList;
	}

	/***
	 *
	 * @return ticketCost
	 */
	public double getTicketCost() {
		return ticketCost;
	}

	/***
	 * set ticketCost
	 * 
	 * @param ticketCost
	 */
	public void setTicketCost(double ticketCost) {
		this.ticketCost = ticketCost;
	}

	/***
	 *
	 * @return flightNumber
	 */
	public BigInteger getFlightNumber() {
		return flightNumber;
	}

	/***
	 * set flightNumber
	 * 
	 * @param flightNumber
	 */
	public void setFlightNumber(BigInteger flightNumber) {
		this.flightNumber = flightNumber;
	}

	/***
	 *
	 * @return noOfPassengers
	 */
	public int getNoOfPassengers() {
		return noOfPassengers;
	}

	/***
	 * set noOfPassengers
	 * 
	 * @param noOfPassengers
	 */
	public void setNoOfPassengers(int noOfPassengers) {
		this.noOfPassengers = noOfPassengers;
	}

	/***
	 * check the equality of Booking object
	 * 
	 * @param object
	 * @return
	 */
	@Override
	public boolean equals(Object object) {
		if (this == object)
			return true;
		if (object == null || !(object instanceof Booking))
			return false;
		Booking booking = (Booking) object;
		return this.bookingId.equals(booking.bookingId);
	}

	/***
	 * override hashcode
	 * 
	 * @return
	 */
	@Override
	public int hashCode() {
		return bookingId.hashCode();
	}

	/***
	 *
	 * @return Combine Booking Details
	 */
	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", userId=" + userId + ", bookingDate=" + bookingDate
				+ ", passengerList=" + passengerList + ", ticketCost=" + ticketCost + ", flightNumber=" + flightNumber
				+ ", noOfPassengers=" + noOfPassengers + "]";
	}

}