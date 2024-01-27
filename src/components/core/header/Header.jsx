
import { Link } from "react-router-dom";
import "./header.css";
import logo  from "../../../assets/images/logo.svg";
import { useState } from "react";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleClass = () => {
     setIsActive(!isActive);   
    }
    return(
        <>
            <header id="header">
                <div className="container v-center">
                    <Link to="/" className="logo"><img src={logo} alt="#" /></Link>
                    <div className={`header-right ${isActive ? 'active' : ''}`}>
                        <nav id="nav">
                            <ul className="list-none flex v-center">
                                <li><Link to="/">Social Media Followers</Link></li>
                                <li><Link to="/request-event">Request Event</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </nav>
                        <ul className="list-none flex ml-auto v-center right-btns">
                        <li className="login-btn"><Link className="btn-primary" to="/sell-tickets">Sell Tickets</Link></li>
                            <li className="login-btn"><Link className="btn-primary" to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
                <button className={`nav-opener ${isActive ? 'active' : ''}`} onClick={toggleClass}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
        </>
    )
}

export default Header