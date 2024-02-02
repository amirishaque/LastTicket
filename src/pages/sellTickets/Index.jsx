import "./sellTickets.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import SmallBanner from "../../components/core/small-banner/Index";
import { Link } from "react-router-dom";


const SellTickets = () => {
    return(
        <>
            <div className="about-area">
                <Header />
                <main id="main">
                    <SmallBanner bannerHeading="Select Your Event" bannerText="Last chance ticket helps you to sell the tickets quickly by making your listing available to millions of customers around the world." />
                    <div className="container text-holder">
                        <div className="boxes-holder">
                            <h2>SELL YOUR TICKETS ON <span>LAST CHANCE TICKET</span></h2>
                            <div className="boxes add">
                                <div className="box">
                                    <div className="ico-holder">&#127941;</div>
                                    <strong>Sports Tickets</strong>
                                    <ul className="box-list">
                                        <li><Link to="/">Formula 1</Link></li>
                                        <li><Link to="/">Sports</Link></li>
                                        <li><Link to="/">UFC</Link></li>
                                        <li><Link to="/">PSL</Link></li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <div className="ico-holder">&#127903;</div>
                                    <strong>Concerts Tickets</strong>
                                    <ul className="box-list">
                                        <li><Link to="/">Concert</Link></li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <div className="ico-holder">&#127915;</div>
                                    <strong>Theatre Tickets</strong>
                                    <ul className="box-list">
                                        <li><Link to="/">Theatre</Link></li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <div className="ico-holder">&#127881;</div>
                                    <strong>Festival Tickets</strong>
                                    <ul className="box-list">
                                        <li><Link to="/">Coming Soon...</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default SellTickets