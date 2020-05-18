package org.cap.bookingmgt.dao;

import java.math.BigInteger;

import org.cap.bookingmgt.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/***
 * @author Akansha Prasad
 */
/***
 * DAO design pattern is a way to reduce coupling between Business logic and
 * Persistence logic.
 */
@Repository
public interface BookingDao extends JpaRepository<Booking, BigInteger> {

}
