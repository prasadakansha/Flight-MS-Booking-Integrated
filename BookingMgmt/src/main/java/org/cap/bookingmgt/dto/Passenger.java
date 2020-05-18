package org.cap.bookingmgt.dto;

import java.math.BigInteger;

/***
 * @author Akansha Prasad
 */
/***
 * DTO was mainly used to get data transported across the network efficiently,
 * it may be even from JVM to another JVM. DTOs are often java. Serializable -
 * in order to transfer data across JVM.
 */
public class Passenger {
	private BigInteger pnrNumber;
	private String passengerName;
	private int passengerAge;
	private BigInteger passengerUIN;
	private double luggage;
	private String gender;
	private static Long generatedNumber = 1000000000L;
    public Passenger(){
        this.pnrNumber = generateValue();
    }

    /***
     * Generate Unique PNR Number
     * @return PNR number as BigInteger
     */
    private static BigInteger generateValue(){
        String generatedValue = ++generatedNumber+"";
        return new BigInteger(generatedValue);
    }

	public BigInteger getPnrNumber() {
		return pnrNumber;
	}

	public void setPnrNumber(BigInteger pnrNumber) {
		this.pnrNumber = pnrNumber;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public int getPassengerAge() {
		return passengerAge;
	}

	public void setPassengerAge(int passengerAge) {
		this.passengerAge = passengerAge;
	}

	public BigInteger getPassengerUIN() {
		return passengerUIN;
	}

	public void setPassengerUIN(BigInteger passengerUIN) {
		this.passengerUIN = passengerUIN;
	}

	public double getLuggage() {
		return luggage;
	}

	public void setLuggage(double luggage) {
		this.luggage = luggage;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
}