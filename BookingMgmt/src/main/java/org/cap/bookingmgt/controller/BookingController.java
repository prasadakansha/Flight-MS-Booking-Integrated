package org.cap.bookingmgt.controller;

import java.math.BigInteger;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.cap.bookingmgt.dto.BookingRequestDto;
import org.cap.bookingmgt.dto.BookingResponseDto;
import org.cap.bookingmgt.dto.FlightScheduleDto;
import org.cap.bookingmgt.dto.Passenger;
import org.cap.bookingmgt.dto.User;
import org.cap.bookingmgt.entities.Booking;
import org.cap.bookingmgt.exceptions.InvalidArgumentException;
import org.cap.bookingmgt.exceptions.InvalidBookingIdException;
import org.cap.bookingmgt.service.BookingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/***
 * @author Akansha Prasad
 */
/***
 * Spring RestController annotation is used to create RESTful web services using
 * Spring MVC. Spring RestController takes care of mapping request data to the
 * defined request handler method. Once response body is generated from the
 * handler method, it converts it to JSON or XML response.
 */
@RestController
@RequestMapping("/bookings")

public class BookingController {

	private static final Logger Log = LoggerFactory.getLogger(BookingController.class);

	@Autowired
	private BookingService bookingService;
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

	/***
	 * create Booking if new request
	 * 
	 * @param bookingRequestDto
	 * @return
	 */
	@PostMapping("/add")
	public ResponseEntity<BookingResponseDto> addBooking(@RequestBody BookingRequestDto bookingRequestDto) {
		BookingResponseDto bookingResponseDto = convert(bookingRequestDto);
		Booking booking = new Booking();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
		LocalDate bookingDate = LocalDate.parse(bookingRequestDto.getBookingDate(), formatter);

		booking.setUserId(bookingRequestDto.getUserId());
		booking.setBookingDate(bookingDate);
		booking.setFlightNumber(bookingRequestDto.getFlightNumber());
		booking.setTicketCost(bookingRequestDto.getTicketCost());

		List<BigInteger> passengerList = passengerList(bookingRequestDto);
		booking.setPassengerList(passengerList);
		booking.setNoOfPassengers(passengerList.size());
		booking = bookingService.addBooking(booking);
		ResponseEntity<BookingResponseDto> response = new ResponseEntity<>(bookingResponseDto, HttpStatus.OK);
		return response;

	}

	/***
	 * convert the booking request to booking response
	 * 
	 * @param bookingRequestDto
	 * @return
	 */
	public BookingResponseDto convert(BookingRequestDto bookingRequestDto) {
		BookingResponseDto bookingResponseDto = new BookingResponseDto();
		bookingResponseDto.setPassengerList(bookingRequestDto.getPassengerList());
		bookingResponseDto.setFlightNumber(bookingRequestDto.getFlightNumber());
		bookingResponseDto.setSource(bookingRequestDto.getSource());
		bookingResponseDto.setDestination(bookingRequestDto.getDestination());
		bookingResponseDto.setBillingAddress(bookingRequestDto.getBillingAddress());

		FlightScheduleDto flightScheduleDto = getScheduleFlightDetails(bookingRequestDto.getFlightNumber());

		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

		bookingResponseDto.setArrivalTime(flightScheduleDto.getArrivalTime());
		bookingResponseDto.setDepartureTime(flightScheduleDto.getDepartureTime());

		User userDetailsDto = fetchUserDetailsById(bookingRequestDto.getUserId());

		bookingResponseDto.setUserId(userDetailsDto.getUserId());
		bookingResponseDto.setUserPhone(userDetailsDto.getUserPhone());
		bookingResponseDto.setSource("Delhi");
		bookingResponseDto.setDestination("Pune");
		bookingResponseDto.setBillingAddress("I-312 Alpha-2,Greater Noida");
		return bookingResponseDto;
	}

	/***
	 * fetch the schedule information by flightNumber
	 * 
	 * @param flightNumber
	 * @return
	 */
	public FlightScheduleDto getScheduleFlightDetails(BigInteger flightNumber) {

		FlightScheduleDto flightScheduleDto = new FlightScheduleDto();
		flightScheduleDto.setFlightNumber(new BigInteger("1234"));
		flightScheduleDto.setAvailableSeat(250);
		flightScheduleDto.setArrivalTime("8:30");
		flightScheduleDto.setDepartureTime("10:30");
		return flightScheduleDto;
	}

	/***
	 * fetch the user Details by unique user Id
	 * 
	 * @param userId
	 * @return
	 */
	public User fetchUserDetailsById(BigInteger userId) {
		User user = new User();
		user.setUserId(new BigInteger("2"));
		user.setUserName("Akansha");
		user.setEmail("akanshanehait@gmail.com");
		user.setPassword("akanshaprasad");
		user.setUserPhone(new BigInteger("9582880603"));
		return user;

	}

	/***
	 *
	 * @param bookingRequestDto
	 * @return the list of passengers unique Identification Number
	 */
	public List<BigInteger> passengerList(BookingRequestDto bookingRequestDto) {
		List<BigInteger> passengerList = new ArrayList<>();
		List<Passenger> passengerDetailsList = bookingRequestDto.getPassengerList();
		for (Passenger passenger : passengerDetailsList) {
			passengerList.add(passenger.getPassengerUIN());
		}
		return passengerList;
	}

	/***
	 * fetch all bookings from database
	 * 
	 * @return Booking List as response
	 */

	@GetMapping("/view")
	public ResponseEntity<List<Booking>> viewBookings() {
		List<Booking> bookings = bookingService.viewBooking();
		ResponseEntity<List<Booking>> response = new ResponseEntity<>(bookings, HttpStatus.OK);
		return response;
	}

	/***
	 * fetch the booking details from database and send response with booking
	 * details
	 * 
	 * @param bookingId
	 * @return
	 */
	@GetMapping("/view/{bookingId}")
	public ResponseEntity<Booking> viewBooking(@PathVariable("bookingId") BigInteger bookingId) {
		Booking booking = bookingService.viewBooking(bookingId);
		ResponseEntity<Booking> response = new ResponseEntity<>(booking, HttpStatus.OK);
		return response;
	}

	/***
	 * delete booking corresponding to the particular bookingId
	 * 
	 * @param bookingId
	 */
	@DeleteMapping("/delete/{bookingId}")
	public boolean deleteBooking(@PathVariable("bookingId") BigInteger bookingId) {
		bookingService.deleteBooking(bookingId);
		return true;
	}

	/***
	 * Handle Invalid bookingId Exception
	 * 
	 * @param ex
	 * @return
	 */
	@ExceptionHandler(InvalidBookingIdException.class)
	public ResponseEntity<String> handleBookingNotFound(InvalidBookingIdException ex) {
		Log.error("INVALID BOOKING ID!!!", ex);
		String msg = ex.getMessage();
		ResponseEntity<String> response = new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
		return response;
	}

	/***
	 * Handle Booking Not Found Exception
	 * 
	 * @param ex
	 * @return
	 */
	@ExceptionHandler(InvalidArgumentException.class)
	public ResponseEntity<String> handleBookingNotFound(InvalidArgumentException ex) {
		Log.error("BOOKING NOT FOUND!!!", ex);
		String msg = ex.getMessage();
		ResponseEntity<String> response = new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
		return response;
	}

	/**
	 * Blanket Exception Handler
	 * 
	 * @param ex
	 * @return
	 */
	@ExceptionHandler(Throwable.class)
	public ResponseEntity<String> handleAll(Throwable ex) {
		Log.error("Something went wrong", ex);
		String msg = ex.getMessage();
		ResponseEntity<String> response = new ResponseEntity<>(msg, HttpStatus.INTERNAL_SERVER_ERROR);
		return response;
	}
}
