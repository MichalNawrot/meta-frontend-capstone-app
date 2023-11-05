import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api/Api";

function updateTimes(state, action) {
    if (action && action.date) {
        return { timeSlots: fetchAPI(action.date) };
    }
    return state;
};

const initializeTimes = { timeSlots: fetchAPI(new Date()) };

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    return (
        <div className="booking-page">
            {/* <h1 id="title">This is BookingPage</h1> */}
            {console.log(availableTimes)};
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
};

export default BookingPage;

export { updateTimes, initializeTimes };