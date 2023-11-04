import TestimonialsCard from "./TestimonialsCard";

const reviews = [
    {
        name: "John Dow",
        text: "Little Lemon is a hidden gem with a cozy atmosphere and exceptional lemon-infused dishes.",
        score: "4"
    },
    {
        name: "Alice",
        text: "Little Lemon is a unique delight. Their lemon-centric dishes, like lemon chicken and lemon sorbet, are winners.",
        score: "4.5"
    },
    {
        name: "Bob",
        text: "The lemony risotto is a must-try. Elegant decor and top-notch service make it perfect culinary adventures!",
        score: "5"
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