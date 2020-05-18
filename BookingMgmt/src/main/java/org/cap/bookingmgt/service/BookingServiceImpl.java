package org.cap.bookingmgt.service;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

import org.cap.bookingmgt.dao.BookingDao;
import org.cap.bookingmgt.entities.Booking;
import org.cap.bookingmgt.exceptions.InvalidArgumentException;
import org.cap.bookingmgt.exceptions.InvalidBookingIdException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/***
 * @author Akansha Prasad
 */
@Service
@Transactional
public class BookingServiceImpl implements BookingService {
	@Autowired
	private BookingDao bookingDao;

	/***
	 *
	 * @param booking throw exception if booking is null else store the booking
	 *                object in database
	 * @return
	 */
	@Override
	public Booking addBooking(Booking booking) {
		if (booking == null) {
			throw new InvalidArgumentException("Booking can't be null");
		}
		return bookingDao.save(booking);
	}

	/***
	 *
	 * @param booking throw exception if booking is null else store the booking
	 *                object in database
	 * @return
	 */
	@Override
	public Booking modifyBooking(Booking booking) {
		if (booking == null) {
			throw new InvalidArgumentException("Booking can't be null");
		}
		return bookingDao.save(booking);
	}

	/***
	 *
	 * @param bookingId throw exception if bookingId is null else fetch booking
	 *                  object from database
	 * @return Booking
	 */
	@Override
	public Booking viewBooking(BigInteger bookingId) {
		Optional<Booking> optional = bookingDao.findById(bookingId);
		if (optional.isPresent()) {
			Booking booking = optional.get();
			return booking;
		}
		throw new InvalidBookingIdException("Booking not found for bookingID:" + bookingId);
	}

	/***
	 *
	 * @return List of all booking
	 */
	@Override
	public List<Booking> viewBooking() {
		return bookingDao.findAll();
	}

	/***
	 *
	 * @param bookingId delete booking based on particular bookingId
	 */
	@Override
	public boolean deleteBooking(BigInteger bookingId) {
		bookingDao.deleteById(bookingId);
		return true;
	}

}
