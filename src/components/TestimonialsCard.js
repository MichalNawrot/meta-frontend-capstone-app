import "./TestimonialsCard.css";

const TestimonialsCard = ({props}) => {
    return (
        <>
            <div className="card">
                <h3>{props.name}</h3>
                <div className="stars">
                    <p>Stars: {props.score}/5</p>
                </div>
                <img src="images/customer1.jpg" alt="Happy customer"></img>
                <p>{props.text}</p>
            </div>
        </>
    );
};

export default TestimonialsCard;