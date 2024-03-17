import "./checkout.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import SmallBanner from "../../components/core/small-banner/Index";
import blockedIcon from "../../assets/images/blocked.png";

import handShake from "../../assets/images/handshake.png";


const Checkout = () => {
    return (
        <>
            <div className="about-area">
                <Header />
                <main id="main" className="checkout">
                    {/* <SmallBanner bannerHeading="Your Order Details By" bannerText="LAST CHANCE TICKET" /> */}
                    <div className="bg-dark mb-4">
                        <div className="container">
                            <h5 className="color_white p-3 m-auto">Hurray! You are in the right place * 100K+ social media followers * We value every custome</h5>

                            <div className="order-card">
                                <div className="text-left py-3 border-bottom">
                                    <h4 className="m-0">Your Order Detail</h4>
                                    <p className="m-0">By Last Chance Ticket</p>
                                </div>
                                <div className="order-row">
                                    <div className="order-col">
                                        <strong>EVENT:</strong>
                                        <span>Semi Final 1 - T20 Cricket <br /> World Cup</span>
                                    </div>
                                    <div className="order-col">
                                        <strong>EVENT TIME:</strong>
                                        <span>20:00</span>
                                    </div>
                                    <div className="order-col">
                                        <strong>DATE:</strong>
                                        <span>04-11-23</span>
                                    </div>
                                    <div className="order-col">
                                        <strong>VENUE:</strong>
                                        <span>Coca Cola Arena, Dubai, UAE</span>
                                    </div>
                                    <div className="order-col">
                                        <strong>CATEGORY:</strong>
                                        <span>Golden Circle - GC</span>
                                    </div>
                                </div>
                                <div className="order-row">
                                    <div className="order-col">
                                        <strong>SECTION:</strong>
                                        <span>Golden Circle</span>
                                    </div>
                                    <div className="order-col">
                                        <strong>SEATING AREA:</strong>
                                        <span>Standing Tickets</span>
                                    </div>
                                    <div className="order-col">
                                        <strong>TICKET:</strong>
                                        <span>E-Ticket</span>
                                    </div>
                                    <div className="order-col">
                                        <strong>AVAILABLE TICKETS:</strong>
                                        <span>7</span>
                                    </div>
                                    <div className="order-col">
                                        <strong>PER-TICKET:</strong>
                                        <span>$310.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-card add ">
                                {/* <div className="left d-none">
                                    <strong>Please confirm how many tickets you would like to purchase</strong>
                                    <div className="select-holder">
                                        <span>Select The Number Of Tickets</span>
                                        <select>
                                            <option>Select Number of Tickets</option>
                                            <option>1 Tickets</option>
                                            <option>2 Tickets</option>
                                            <option>3 Tickets</option>
                                            <option>4 Tickets</option>
                                            <option>5 Tickets</option>
                                            <option>6 Tickets</option>
                                            <option>7 Tickets</option>
                                        </select>
                                    </div>
                                </div> */}
                                <div className="right">
                                    <div className="widget">
                                        <h2>About Your Tickets</h2>
                                        <div className="d-md-flex justify-content-between px-5">
                                            <ul className="list-none list">
                                                <li>
                                                    <img src={blockedIcon} alt="#" />
                                                    <span className="fw-bold">Ticket Type :</span>
                                                    <span> Age Limit 21+</span>

                                                </li>
                                                <li>
                                                    <img src={handShake} alt="#" />
                                                    <span className="fw-bold">Ristriction :</span>
                                                    <span>  No Ristriction</span>

                                                </li>
                                                <li>
                                                    <span className="fw-bold">Fans Section :  </span>
                                                    <span>  No seated</span>


                                                </li>
                                            </ul>
                                            <ul className="list-none list">
                                                <li>
                                                    <img src={blockedIcon} alt="#" />
                                                    <span className="fw-bold">Ticket Type :</span>
                                                    <span> Age Limit 21+</span>

                                                </li>
                                                <li>
                                                    <img src={handShake} alt="#" />
                                                    <span className="fw-bold">Ristriction :</span>
                                                    <span>  No Ristriction</span>

                                                </li>
                                                <li>
                                                    <span className="fw-bold">Fans Section :  </span>
                                                    <span>  No seated</span>


                                                </li>
                                            </ul>
                                            <ul className="list-none list">
                                                <li>
                                                    <img src={blockedIcon} alt="#" />
                                                    <span className="fw-bold">Ticket Type :</span>
                                                    <span> Age Limit 21+</span>

                                                </li>
                                                <li>
                                                    <img src={handShake} alt="#" />
                                                    <span className="fw-bold">Ristriction :</span>
                                                    <span>  No Ristriction</span>

                                                </li>
                                                <li>
                                                    <span className="fw-bold">Fans Section :  </span>
                                                    <span>  No seated</span>


                                                </li>
                                            </ul>
                                        </div>
                                        <div class="alert alert-success" role="alert">
                                            Great! You are logged in successfully. Please proceed to  checkout.
                                        </div>
                                    </div>
                                    <div className="widget">
                                        <input type="submit" value="Proceed to Checkout" />
                                    </div>
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

export default Checkout