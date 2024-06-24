import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

// timeReducer.test.js

import { initializeTimes,updateTimes } from './components/timeReducer';

describe('timeReducer', () => {
  test('initializeTimes should return the correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  test('updateTimes should return the same state for unknown action type', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UNKNOWN' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });

  test('updateTimes should return updated times for UPDATE action type', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE', date: '2023-01-01' };
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = updateTimes(initialState, action);
    expect(result).toEqual(expectedTimes);
  });
});
