import BookingForm from "./BookingForm";

const BookingPage = () => {
    const availableTimes = ["17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]

    return (
        <div className="booking-page">
            {/* <h1 id="title">This is BookingPage</h1> */}
            <BookingForm availableTimes={availableTimes}/>
        </div>
    );
};

export default BookingPage;