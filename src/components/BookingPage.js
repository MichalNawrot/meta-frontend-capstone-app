import { useReducer } from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
    function updateTimes(state, action) {
        return { timeSlots: ['17:00', '18:00', '19:00', '20:00', '21:00'] }
    };

    const initializeTimes = { timeSlots: ['17:00', '18:00', '19:00', '20:00', '21:00'] };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)
    return (
        <div className="booking-page">
            {/* <h1 id="title">This is BookingPage</h1> */}
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </div>
    );
};

export default BookingPage;