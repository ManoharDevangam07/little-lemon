import React from 'react';
import '../components/css/booking.css';

const BookingForm = ({
  date,
  time,
  guests,
  occasion,
  availableTimes,
  handleDateChange,
  handleTimeChange,
  handleGuestsChange,
  handleOccasionChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid',  gap: '20px' }}>
        <h2 style={{color:"black",marginTop:"20px",marginBottom:"0px"}}>Book Now</h2>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
    
        <select id="res-time" value={time} onChange={handleTimeChange}>
          {availableTimes?.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
     

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" placeholder="1" min="1" max="10" value={guests} onChange={handleGuestsChange} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input className='primary-btn' type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
