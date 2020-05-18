package org.cap.bookingmgt.dto;

import java.math.BigInteger;
import java.time.LocalDateTime;

/***
 * @author Akansha Prasad
 */
/***
 * DTO was mainly used to get data transported across the network efficiently,
 * it may be even from JVM to another JVM. DTOs are often java. Serializable -
 * in order to transfer data across JVM.
 */
public class FlightScheduleDto {
	private BigInteger flightNumber;
	private int availableSeat;
	private String arrivalTime;
	private String departureTime;

	public BigInteger getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(BigInteger flightNumber) {
		this.flightNumber = flightNumber;
	}

	public int getAvailableSeat() {
		return availableSeat;
	}

	public void setAvailableSeat(int availableSeat) {
		this.availableSeat = availableSeat;
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

}
