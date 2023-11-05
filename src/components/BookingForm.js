import { useEffect, useState } from "react";


const BookingForm = (props) => {
    const [name, setName] = useState("");
    const [resDate, setResDate] = useState("");
    const handleDateChange = (e) => {
        setResDate(e.target.value);
        props.dispatch({ date: new Date(e.target.value) })
    };
    const [resTime, setResTime] = useState("");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("");
    const [isdisabled, setIsDisabled] = useState(true)



    useEffect(() => {
        const validate = () => {
            return name.length > 0 & resDate.length > 0;
        };
        const isValid = validate()
        setIsDisabled(!isValid)
    }, [name, resDate])

    return (
        <div className="form-container">
            <form onSubmit={props.submitForm}>
                <div>
                    <label htmlFor="name">Reserve a Table for</label>
                    <input type="text" id="name"
                        placeholder="Name"
                        maxLength={50}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date"
                        value={resDate}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="res-time" >Choose time</label>
                    <select id="res-time "
                        value={resTime}
                        onChange={(e) => setResTime(e.target.value)}
                        required
                    >
                        {
                            props.availableTimes.timeSlots.map((time, index) => {
                                return (
                                    <option key={index}>{time}</option>
                                );
                            })
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="guests" >Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        required
                    >
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <input aria-label='On Click' type="submit" value="Reserve a Table" disabled={isdisabled} />
            </form>
        </div>
    );
};

export default BookingForm;