import "./orderSummary.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import SmallBanner from "../../components/core/small-banner/Index";
import seatIcon from "../../assets/images/seated.png";
import ticket from "../../assets/images/ticketIcon.png";

const OrderSummary = () => {
    return(
        <>
            <div className="login-page">
                <Header />
                <main id="main">
                    <SmallBanner bannerHeading="ORDER SUMMARY" />
                    <div className="contact-cols login-cols">
                        <div className="container">
                            <div className="view-area">
                                <div id="content" className="flex add">
                                    <aside id="sidebar" className="add">
                                        <div className="side-details">
                                            <h2>Order Summary</h2>
                                            <div className="product-holder">
                                                <img src={ticket} alt="#" />
                                                <div className="info">
                                                    <strong>Bryan Adams</strong>
                                                    <ul className="list-none">
                                                        <li>Date: 04-11-23</li>
                                                        <li>Event Time : 20:00</li>
                                                        <li>Ticket Type : E-Ticket</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="venu">
                                                <strong>Venue</strong>
                                                <span>Coca Cola Arena, Dubai, UAE</span>
                                            </div>
                                            <div className="order-total-block">
                                                <div className="order-total-dt">
                                                    <div className="order-text">Category</div>
                                                    <div className="order-number">Golden Circle - GC</div>
                                                </div>
                                                <div className="order-total-dt">
                                                    <div className="order-text">Section</div>
                                                    <div className="order-number">Golden Circle</div>
                                                </div>
                                                <div className="order-total-dt">
                                                    <div className="order-text">Row</div>
                                                    <div className="order-number"></div>
                                                </div>
                                                <div className="order-total-dt">
                                                    <div className="order-text">Seating Area</div>
                                                    <div className="order-number">Standing Tickets</div>
                                                </div>
                                                <div className="order-total-dt">
                                                    <div className="order-text">Per-Ticket</div>
                                                    <div className="order-number">$310.00</div>
                                                </div>
                                                <div className="order-total-dt">
                                                    <div className="order-text">Total Tickets</div>
                                                    <div className="order-number"><small>x</small>4</div>
                                                </div>
                                                <div className="order-total-dt">
                                                    <div className="order-text">Total Tickets Price</div>
                                                    <div className="order-number">$1240</div>
                                                </div>
                                                <div className="order-total-dt">
                                                    <div className="order-text">Shipping and Handling Fee</div>
                                                        <div className="order-number">$0.00</div>
                                                    </div>
                                                <div className="order-total-dt">
                                                    <div className="order-text">Service Charges</div>
                                                    <div className="order-number">+ $124</div>
                                                </div>
                                                <div className="order-total-dt last">
                                                    <div className="order-text"><b>Total</b></div>
                                                    <div className="order-number ttl-clr"><b>$1364</b></div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                    <div className="ticket-list add">
                                        <div className="product-card">
                                            <h2>Payment Details</h2>
                                            <h3>Total Payable Amount : $1364</h3>
                                            <div className="fields">
                                                <div className="field-row">
                                                    <span>Name on Card</span>
                                                    <input type="text" />
                                                </div>
                                                <div className="field-row">
                                                    <span>Card Number</span>
                                                    <input type="text" />
                                                </div>
                                                <div className="field-row multi">
                                                    <div className="field-col">
                                                        <span>CVV</span>
                                                        <input type="text" placeholder="e.g 415" />
                                                    </div>
                                                    <div className="field-col">
                                                        <span>Expiration Month</span>
                                                        <input type="text" placeholder="MM" />
                                                    </div>
                                                    <div className="field-col">
                                                        <span>Expiration Year</span>
                                                        <input type="text" placeholder="YYYY" />
                                                    </div>
                                                </div>
                                                <div className="field-row check">
                                                    <input id="checkbox" type="checkbox" />
                                                    <label htmlFor="checkbox">I agree with the LCT Terms & Conditions</label>
                                                </div>
                                                <div className="submit-holder">
                                                    <input type="submit" value="Pay $1364" />
                                                </div>
                                            </div>
                                        </div>
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

export default OrderSummary