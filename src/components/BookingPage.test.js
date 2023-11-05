import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './BookingPage';

test('returns the initial state', () => {
    const newState = initializeTimes;
    expect(newState.timeSlots.length > 0).toBe(true);
});

test('returns state unchanged if no date passed in', () => {
    const state = {"timeSlots": ["17:00", "18:00", "19:00", "20:00", "21:00"]};
    const newState = updateTimes(state);
    expect(newState).toEqual(state);
  });

test('returns state when date passed in', () => {
    const state = {"timeSlots": ["17:00", "17:30", "18:00", "18:30", "20:00", "22:00", "22:30"]};
    const action = {"date": new Date("2023-11-05")};
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
  });

test('Renders the BookingForm heading', () => {

    const availableTimes = { timeSlots: ['17:00', '18:00', '19:00', '20:00', '21:00'] };

    render(<BookingForm availableTimes={availableTimes} />);
    const dateElement = screen.getByText("Choose date");
    expect(dateElement).toBeInTheDocument();

    const timeElement = screen.getByText("Choose time");
    expect(timeElement).toBeInTheDocument();
});