import React, { useState, useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { initializeTimes,updateTimes } from '../components/timeReducer';

const BookingPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'UPDATE', date: e.target.value });
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Guests:', guests);
    console.log('Occasion:', occasion);
  };

  return (
    <>
      <BookingForm
        date={date}
        time={time}
        guests={guests}
        occasion={occasion}
        availableTimes={availableTimes}
        handleDateChange={handleDateChange}
        handleTimeChange={handleTimeChange}
        handleGuestsChange={handleGuestsChange}
        handleOccasionChange={handleOccasionChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default BookingPage;
