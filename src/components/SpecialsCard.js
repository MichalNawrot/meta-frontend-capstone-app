import "./SpecialsCard.css";
import { Link } from "react-router-dom";

const SpecialsCard = ({props}) => {
    return (
        <>
            <div className="SpecialsCard">
                <img src={props.src} alt={props.alt}></img>
                <h3>{props.name}</h3>
                <h4>${props.price}</h4>
                <p id="desc">{props.description}</p>
                <p id="delivery" aria-label='On Click'><Link to="/order-online"><strong>Order online</strong></Link></p>
            </div>
        </>
    );
};

export default SpecialsCard;