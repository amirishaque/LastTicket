
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../../assets/images/logo.svg";
import { useState } from "react";
import Dropdown from "../../home/dropdown/DropDown";
import LogoMain from '../../../assets/images/logoMain.png';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleClass = () => {
        setIsActive(!isActive);
    }
    return (
        <>
            <header id="header">
                <div className="container v-center">
                    <Link to="/" className="logo mb-1"><img src={LogoMain} alt="logo" width={231} height={48} /></Link>
                    <div className={`header-right ${isActive ? 'active' : ''}`}>
                       <figure>
                        <img src={LogoMain} alt="logo" width={231} height={48} />
                       </figure>
                        <nav id="nav">
                            
                            <ul className="list-none flex v-center">
                                
                                {/* <li><Link to="/" className="fw-bold" style={{textShadow: "0 2px 4px #00FFF0"}}>100+ Social Media Followers</Link></li> */}
                                <li><Link to="/sell-tickets">Sell Tickets</Link></li>
                                <li><Link to="/request-event">Request Event</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </nav>
                        <div className="header-right-wrapper">
                        <span className="review-more"> 100k+ Social Media Followers </span>
                        <Dropdown/>
                        <ul className="list-none flex ml-auto v-center">
                            <li className="login-btn"><Link className="btn-primary text-decoration-none" to="/login">Login</Link></li>
                        </ul>
                        </div>
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