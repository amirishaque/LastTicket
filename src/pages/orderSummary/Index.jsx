import "./orderSummary.css";
import { useState } from "react";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import SmallBanner from "../../components/core/small-banner/Index";
import seatIcon from "../../assets/images/seated.png";
import ticket from "../../assets/images/ticketIcon.png";
import VISA from "../../assets/images/Visa_Electron.svg.png"
import MasterCard from "../../assets/images/mastercard_PNG23.png"
import GooglePay from "../../assets/images/google_pay.png"
import PayApple from "../../assets/images/pay_apple.png"
import Strip from "../../assets/images/stripe.png"
import PayPal from "../../assets/images/paypal.png"



const OrderSummary = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {

        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <>
            {isPopupOpen && (
                <div className="popup ticket_booking_popup w-50">
                    <div className="text-right"> <span className="close ticket_popup_close" onClick={closePopup}>&times;</span></div>
                    <div className="popup-content">

                        <h4 className="border-bottom pb-2">Payment Details</h4>
                        <h4 className="fw-bold">Total Payable</h4>
                        <h4 className="fw-bold">Amount 1300$</h4>

                        <form className="filters-form">
                            <label for="exampleFormControlInput1" class="form-label">Name of card</label>
                            <input type="text" class="form-control" id="Name_card" placeholder="Name of card"/>
                            <label for="exampleFormControlInput1" class="form-label">Card No</label>
                            <input type="text" class="form-control" id="cardNo" placeholder="Card No"/>
                           
                            <button className="ticket_popup_btn">Pay</button>
                        </form>
                    </div>
                </div>
            )}
            <div className="login-page">
                <Header />
                <main id="main">
                    <section className="p-5 order_summary text-center">
                        <h4 className="text-center">Congratulations</h4>
                        <h4 className="text-center">An Unforgettable experience is just 1 click away</h4>
                        <span >Buy now before price go up</span>
                        <div className="d-md-flex justify-content-center">
                            <div className="time_label">
                                <p>100%  Safe & Secure</p>
                                <p>100%  Guaranteed</p>
                                <p>100%  Transparent</p>
                            </div>
                            <div className="d-flex order_summary_time">
                                <p>02</p>
                                <p>:</p>
                                <p>55</p>
                            </div>

                        </div>
                        <span>left to complete purchase..!</span>


                    </section>
                    {/* <SmallBanner bannerHeading="ORDER SUMMARY" /> */}
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
                                    {/* <div className="ticket-list add">
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
                                    </div> */}
                                    <div className="px-4 payment_gateway">
                                        <h5 className="mx-3">Secured Payment Gateway</h5>
                                        <div className=" mb-3">
                                            <div className="d-flex justify-content-between">
                                                <a onClick={openPopup}><img src={VISA} alt="" /></a>
                                                <a onClick={openPopup}><img src={MasterCard} alt="" /></a>
                                                <a onClick={openPopup}><img src={GooglePay} alt="" /></a>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <a onClick={openPopup}><img src={PayApple} alt="" /></a>
                                                <a onClick={openPopup}><img src={Strip} alt="" /></a>
                                                <a onClick={openPopup}><img src={PayPal} alt="" /></a>
                                            </div>


                                        </div>
                                        <h5 className="py-5 text-center border-1 mx-3" style={{border:"1px solid #22B3C1"}}>“We care about your security, No credit card information is stored on
                                           <br/> on our website. Our site utilizes  an internationally
                                           <br/> certified, encrypted payment gateway”</h5>
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