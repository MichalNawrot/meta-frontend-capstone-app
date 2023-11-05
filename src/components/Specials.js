import SpecialsCard from "./SpecialsCard";
import { Link } from "react-router-dom";

const specials = [
    {
        name: "Greek Salad",
        price: "12.99",
        src: "images/meal-greek-salad.jpg",
        alt: "Specials greek salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
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
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
]

const Specials = () => {
    return (
        <div id="specials">
            <div id="header">
                <h1>This weeks specials!</h1>
                <button aria-label='On Click'><Link to="/online-menu">Online Menu</Link></button>
            </div>
            <div id="cards">
                {
                    specials.map((special, index) => {
                        return (
                            <SpecialsCard key={index} props={special} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Specials;