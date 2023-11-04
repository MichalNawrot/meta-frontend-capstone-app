import Nav from './Nav';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <Link to="/">
                    <img src="images/logo-text-color.png" alt="logo Little Lemon"></img>
                </Link>
            </header>
            <Nav />
        </>
    );
};

export default Header;