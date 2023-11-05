import TestimonialsCard from "./TestimonialsCard";

const reviews = [
    {
        name: "John Dow",
        text: "Little Lemon is a hidden gem with a cozy atmosphere and exceptional lemon-infused dishes.",
        score: "4",
        photo: "images/customer4.jpg"
    },
    {
        name: "Mia Maria",
        text: "Little Lemon is a unique delight. Their lemon-centric dishes, like lemon chicken and lemon sorbet, are winners.",
        score: "4.5",
        photo: "images/customer1.jpg"
    },
    {
        name: "Bob Cash",
        text: "The lemony risotto is a must-try. Elegant decor and top-notch service make it perfect culinary adventures!",
        score: "5",
        photo: "images/customer3.jpg"
    },
]

const Testimonials = () => {
    return (
        <div id="testimonials">
            <h1>Testimonials</h1>
            <div id="cards">
                {
                    reviews.map((review, index) => {
                        return (
                            <TestimonialsCard key={index} props={review} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Testimonials;