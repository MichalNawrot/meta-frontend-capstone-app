import SpecialsCard from "./SpecialsCard";
import { Link } from "react-router-dom";

const specials = [
    {
        name: "Greek Salad",
        price: "12.99",
        src: "images/meal-greek-salad.jpg",
        alt: "Specials greek salad",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        name: "Bruchetta",
        price: "5.99",
        src: "images/meal-bruchetta.png",
        alt: "Specials bruchetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
        name: "Lemon Dessert",
        price: "4.99",
        src: "images/meal-lemon-dessert.jpg",
        alt: "Specials lemon dessert",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]

const Specials = () => {
    return (
        <div id="specials">
            <div id="header">
                <h1>This weeks specials!</h1>
                <button><Link to="/online-menu">Online Menu</Link></button>
            </div>
            <div id="cards">
                {
                    specials.map((special) => {
                        return (
                            <SpecialsCard props={special} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Specials;