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
public class User {

	private BigInteger userId;
	private String userName;
	private String password;
	private BigInteger userPhone;
	private String email;

	public BigInteger getUserId() {
		return userId;
	}

	public void setUserId(BigInteger userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public BigInteger getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(BigInteger userPhone) {
		this.userPhone = userPhone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
