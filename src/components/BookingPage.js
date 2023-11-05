import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api/Api";
import { useNavigate } from "react-router-dom";

function updateTimes(state, action) {
    if (action && action.date) {
        return { timeSlots: fetchAPI(action.date) };
    }
    return state;
};

const initializeTimes = { timeSlots: fetchAPI(new Date()) };

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    const navigate = useNavigate()

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed-booking")
        };
    };
    return (
        <div className="booking-page">
            {/* <h1 id="title">This is BookingPage</h1> */}
            {console.log(availableTimes)}
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}
                submitForm={submitForm} />
        </div>
    );
};

export default BookingPage;

export { updateTimes, initializeTimes };