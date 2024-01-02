
import "./header.css";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Logo from "../../../assets/images/ticket_logo.png";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { ctaBtnIcon } from "../../../utils/SvgIcons";
import Search from "../search/Search";


const Header = ({pageTitle, details}) => {
    const ref = useRef();
    const user = JSON.parse(localStorage.getItem("user"));
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [nav, setNav] = useState(false);

    const [isOpened, setIsOpen] = useState(false);
    const showNav = (e) => {
        setNav(!nav);

   }
    const Navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        if(user?.isInstitute){
            Navigate("/institute-login");
        }
        else{
            Navigate("/login");
        }
    }
    const handleUserDropdown = () => {
        setIsOpen(!isOpened);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return(
        <>
            <header className="landing__header">
                <div className="top_bar">
                    <marquee>Hurray! You are in the right place * 100K social media followers * We value every customer * 100% customer satisfaction * We guarantee your entry * SSL certificate website * Secured payout * 24/7 Customer Support</marquee>
                </div>
                <div className="site__container">
                    <div className="landing__header-content d__flex d__flex-h-between d__flex-v-center">
                        <Link className="landing__header-logo" to="/">
                            <img src={Logo} alt="#"  />
                        </Link>
                        <div className={`landing__header-menu`}>
                            <ul className="landing__header-items d__flex d__flex-v-center gap-1">
                                <li className="landing__header-item">
                                    <HashLink to="/">Home</HashLink>
                                </li>
                                <li className="landing__header-item">
                                    <HashLink to="/about">About Us</HashLink>
                                </li>
                                <li className="landing__header-item">
                                    <HashLink to="/contact">Contact</HashLink>
                                </li>
                            </ul>
                        </div>

                        <div className="header__cta d__flex">
                            <Search />
                            <NavLink to="/login" className="cta__btn">Login{ctaBtnIcon()}</NavLink>
                        </div>
                        <button className={`humbuger ${nav==true ? "active" : ""}`}  onClick={() => showNav()} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header