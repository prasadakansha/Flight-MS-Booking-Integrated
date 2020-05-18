package org.cap.bookingmgt.dto;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;

/***
 * @author Akansha Prasad
 */
/***
 * DTO was mainly used to get data transported across the network efficiently,
 * it may be even from JVM to another JVM. DTOs are often java. Serializable -
 * in order to transfer data across JVM.
 */
public class BookingResponseDto {
	private BigInteger flightNumber;
	private String source;
	private String destination;
	private String arrivalTime;
	private String departureTime;
	private List<Passenger> passengerList;
	private BigInteger userPhone;
	private BigInteger userId;
	private String billingAddress;

	public BigInteger getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(BigInteger flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public String getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}

	public List<Passenger> getPassengerList() {
		return passengerList;
	}

	public void setPassengerList(List<Passenger> passengerList) {
		this.passengerList = passengerList;
	}

	public BigInteger getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(BigInteger userPhone) {
		this.userPhone = userPhone;
	}

	public BigInteger getUserId() {
		return userId;
	}

	public void setUserId(BigInteger userId) {
		this.userId = userId;
	}

	public String getBillingAddress() {
		return billingAddress;
	}

	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}

}
