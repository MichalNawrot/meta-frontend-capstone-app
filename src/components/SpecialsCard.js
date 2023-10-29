import "./SpecialsCard.css";

const SpecialsCard = ({props}) => {
    return (
        <>
            <div className="SpecialsCard">
                <img src={props.src} alt={props.alt}></img>
                <h3>{props.name}</h3>
                <h4>${props.price}</h4>
                <p id="desc">{props.description}</p>
                <p id="delivery"><strong>Order a delivery</strong></p>
            </div>
        </>
    );
};

export default SpecialsCard;