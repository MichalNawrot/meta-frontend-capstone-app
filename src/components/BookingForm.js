import { useState } from "react";


const BookingForm = (props) => {
    const [name, setName] = useState("");
    const [resDate, setResDate] = useState("");
    const handleDateChange = (e) => {
        setResDate(e.target.value);
        props.dispatch({date: new Date(e.target.value) })
      };
    const [resTime, setResTime] = useState("");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("");
    return (
        <form>
            <div>
                <label htmlFor="name">Reserve a Table for:</label>
                <input type="text" id="name"
                    placeholder="Name"
                    maxLength={50}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="res-date"> Choose date</label>
                <input type="date" id="res-date"
                    value={resDate}
                    onChange={handleDateChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="res-time" > Choose time</label>
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
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input type="submit" value="Reserve a Table" />
        </form>
    );
};

export default BookingForm;