import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div id="hero">
            <div id="hero-content">
                <div id="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button><Link to="/reserve-a-table">Reserve a Table</Link></button>
                </div>
                <div id="hero-img">
                    <img src="images/restaurant-food.jpg" alt="Little Lemon food"></img>
                </div>
            </div>
        </div>
    );
};

export default Hero;