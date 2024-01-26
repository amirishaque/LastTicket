import { Link } from "react-router-dom";
import "./footer.css";
import callIcon from "../../../assets/images/call.svg";
import mailIcon from "../../../assets/images/mail.svg";
import locationIcon from "../../../assets/images/foot-location.svg";
import logo from "../../../assets/images/logo.svg";

const Footer = () => {
    return(
        <>
            <footer id="footer">
            <div class="container">
                <div class="information">
                    <div class="info">
                        <div class="info-img">
                            <img src={callIcon} alt="" />
                        </div>
                        <div class="info-content">
                            <span>Phone:</span>
                            <p>513,603,2999</p>
                        </div>
                    </div>
                    <div class="info">
                        <div class="info-img">
                            <img src={mailIcon} alt="" />
                        </div>
                        <div class="info-content">
                            <span>Email:</span>
                            <p>contactus@senneca.com</p>
                        </div>
                    </div>
                    <div class="info">
                        <div class="info-img">
                            <img src={locationIcon} alt="" />
                        </div>
                        <div class="info-content">
                            <span>Address:</span>
                            <p>11502 Century BoulevardCincinnati, OH 452</p>
                        </div>
                    </div>
                </div>
                <div class="footer-nav">
                    <div class="foot-logo">
                        <Link to="/"><img src={logo} alt="ScoreTickets" /></Link>
                    </div>
                    <div class="foot-nav">
                        <nav id="navbar">
                            <ul>
                                <li><Link to="/" class="active">Sports</Link></li>
                                <li><Link to="/">Concerts</Link></li>
                                <li><Link to="/">Shows</Link></li>
                                <li><Link to="/">Cities</Link></li>
                                <li><Link to="/">Support</Link></li>
                                <li><Link to="/">Sell</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="social">
                        <img src="images/Social Icons.svg" alt="" />
                    </div>
                </div>
                <div class="copy">
                    <p>Copyright © 2023, ScoreSpecs. All Rights Reserved.</p>
                    <span><a href="#.">Privacy Policy </a> &nbsp;  |   &nbsp;<a href="#."> Term of use</a></span>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer