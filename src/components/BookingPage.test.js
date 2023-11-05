import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './BookingPage';

const MockBookingForm = () => {
    const availableTimes = { timeSlots: ['17:00', '18:00', '19:00', '20:00', '21:00'] };

    return (
        <>
            <BookingForm availableTimes={availableTimes} dispatch={jest.fn()} />
        </>
    );
};

test('returns the initial state', () => {
    const newState = initializeTimes;
    expect(newState.timeSlots.length > 0).toBe(true);
});

test('returns state unchanged if no date passed in', () => {
    const state = { "timeSlots": ["17:00", "18:00", "19:00", "20:00", "21:00"] };
    const newState = updateTimes(state);
    expect(newState).toEqual(state);
});

test('returns state when date passed in', () => {
    const state = { "timeSlots": ["17:00", "17:30", "18:00", "18:30", "20:00", "22:00", "22:30"] };
    const action = { "date": new Date("2023-11-05") };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
});

test('Renders the BookingForm heading', () => {
    render(<MockBookingForm />);
    const tableForElement = screen.getByText("Reserve a Table for:");
    expect(tableForElement).toBeInTheDocument();

    const dateElement = screen.getByText("Choose date");
    expect(dateElement).toBeInTheDocument();

    const timeElement = screen.getByText("Choose time");
    expect(timeElement).toBeInTheDocument();

    const numberElement = screen.getByText("Number of guests");
    expect(numberElement).toBeInTheDocument();

    const occasionElement = screen.getByText("Occasion");
    expect(occasionElement).toBeInTheDocument();
});

test("check valid number of guests", () => {
    render(<MockBookingForm />);
    const guests = screen.getByLabelText("Number of guests");
    expect(parseInt(guests.value)).toBeGreaterThanOrEqual(1);
});

test("check invalid number of guests", () => {
    render(<MockBookingForm />);
    const guests = screen.getByLabelText("Number of guests");
    fireEvent.change(guests, { target: { value: 0 } });
    expect(guests).toBeInvalid();
});

test("submit button should be disabled if an error is present", () => {
    render(<MockBookingForm />);
    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeDisabled();
});

test("submit button should be active when form is valid", () => {
    render(<MockBookingForm />);
    const submitButton = screen.getByRole("button");
    const tableForElement = screen.getByLabelText("Reserve a Table for:");
    fireEvent.change(tableForElement, { target: { value: "John Doe" } });

    const dateElement = screen.getByLabelText("Choose date");
    fireEvent.change(dateElement, { target: { value: "2023-11-05" } });

    expect(submitButton).not.toBeDisabled();
});