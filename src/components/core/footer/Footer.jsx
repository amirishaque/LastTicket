import "./footer.css";
import Logo from "../../../assets/images/ticket_logo.png";
import { HashLink } from "react-router-hash-link";
import { twitterIcon ,facebookIcon ,instagramIcon ,githubIcon } from "../../../utils/SvgIcons";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <footer className="landing__footer">
                <div className="site__container">
                    <div className="footer__content">
                        <div className="footer__level-one d__flex d__flex-h-between d__flex-v-center">
                            <div className="footer__logo">
                                <img src={Logo} />
                            </div>
                            <div className="footer__menu">
                                <ul className="footer__menu-list d__flex gap-3">
                                <li>
                                    <HashLink to="/home">Home</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/about">About Us</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/contact">Contact</HashLink>
                                </li>
                                </ul>
                            </div>
                            <div className="footer__social">
                                <ul className="footer__social-list d__flex gap-3">
                                    <li><a href="#" target="_blank">{twitterIcon()}</a></li>
                                    <li><a href="#" target="_blank">{facebookIcon()}</a></li>
                                    <li><a href="#" target="_blank">{instagramIcon()}</a></li>
                                    <li><a href="#" target="_blank">{githubIcon()}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__level-two d__flex d__flex-h-between d__flex-v-center">
                            <p>© Copyright 2023, All Rights Reserved</p>
                            <ul className="privacy__menu d__flex gap-2">
                                <li><Link>Privacy Policy </Link></li>
                                <li><Link>Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer