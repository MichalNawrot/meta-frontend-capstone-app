import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <menu>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/reserve-a-table">Reserve a Table</Link></li>
                <li><Link to="/online-menu">Online Menu</Link></li>
                <li><Link to="/order-online">Order online</Link></li>
                <li><Link to="/about">About</Link></li>
            </menu>
        </nav>
    );
};

export default Nav;