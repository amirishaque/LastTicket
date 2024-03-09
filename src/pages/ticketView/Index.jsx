import "./ticketView.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import SmallBanner from "../../components/core/small-banner/Index";
import seatIcon from "../../assets/images/seated.png";
import map from "../../assets/images/map.jpg";
import ticket from "../../assets/images/ticketIcon.png";

const TicketView = () => {
    return(
        <>
            <div className="login-page">
                <Header />
                <main id="main">
                    <SmallBanner bannerHeading="Bryan Adams - Coca Cola Arena, Dubai, UAE" bannerText="Last Chance Ticket is a ticket reselling marketplace and not the primary ticket provider. Our website enables sellers to resell tickets, which may be priced above or below face value." />
                    <div className="contact-cols login-cols">
                        <div className="container">
                            <div className="filters-holder">
                                <strong>Last Chance Ticket</strong>
                                <div className="seat-ico flex v-center">
                                    <img src={seatIcon} alt="#" />
                                    <span>Select number of tickets and you will be seated together.</span>
                                </div>
                                <form className="filters-form">
                                    <div className="selects flex v-center">
                                        <select>
                                            <option>Fill By Ticket Type</option>
                                            <option>All Tickets</option>
                                            <option>Paper Ticket</option>
                                            <option>E-Ticket</option>
                                            <option>Mobile Ticket</option>
                                        </select>
                                        <select>
                                            <option>Filter by Restrictions</option>
                                            <option>Age Limit 14+</option>
                                            <option>Age Limit 21+</option>
                                            <option>No Restrictions</option>
                                            <option>All Tickets</option>
                                        </select>
                                        <select>
                                            <option>No. of Tickets in Listing</option>
                                            <option>All Tickets</option>
                                        </select>
                                    </div>
                                    <div className="sort-row flex v-center">
                                        <strong>Sort By:</strong>
                                        <div className="radios">
                                            <label htmlFor="all">ALL</label>
                                            <input type="radio" id="all" name="group1" selected />
                                            <label htmlFor="low-to-high">PRICE: Low to High</label>
                                            <input type="radio" id="low-to-high" name="group1" />
                                            <label htmlFor="high-to-low">PRICE High to Low</label>
                                            <input type="radio" id="high-to-low" name="group1" />
                                            <label htmlFor="best-value">Best Value</label>
                                            <input type="radio" id="best-value" name="group1" />
                                            <label htmlFor="newest">Newest</label>
                                            <input type="radio" id="newest" name="group1" />
                                        </div>
                                    </div>
                                    <div className="counters flex">
                                        <button type="button" className="active">1</button>
                                        <button type="button">2</button>
                                        <button type="button">3</button>
                                        <button type="button">4</button>
                                        <button type="button">5+</button>
                                    </div>
                                </form>
                            </div>

                            <div className="view-area">
                                <header className="header">
                                    <h2>Categories:</h2>
                                    <div className="colors flex v-center">
                                        <div className="color">
                                            <div className="dot"></div>
                                            <span>Golden Circle - GC</span>
                                        </div>
                                        <div className="color">
                                            <div className="dot yellow"></div>
                                            <span>Upper Bowl</span>
                                        </div>
                                    </div>
                                </header>
                                <div id="content" className="flex">
                                    <aside id="sidebar">
                                        <div className="map-holder">
                                            <img src={map} alt="#" />
                                            <div className="views">
                                              100  
                                            </div>
                                        </div>
                                        <div className="widget">
                                            <strong>Filter By Category</strong>
                                            <select>
                                                <option>SEARCH BY CATEGORY</option>
                                                <option>All Tickets</option>
                                                <option>Golden Circle - GC</option>
                                                <option>Upper Bowl</option>
                                            </select>
                                        </div>
                                    </aside>
                                    <div className="ticket-list">
                                        <div className="ticket">
                                            <div className="ticket-holder">
                                                <img src={ticket} alt="#" />
                                            </div>
                                            <div className="cols flex v-center">
                                                <div className="column">
                                                    <span>Category:</span>
                                                    <strong>Golden Circle - GC</strong>
                                                    <span>Section:</span>
                                                    <strong>Golden Circle</strong>
                                                </div>
                                                <div className="column">
                                                    <span>Tickets:</span>
                                                    <strong>No of Tickets: 7</strong>
                                                    <span>Restriction:</span>
                                                    <strong>Age Limit 21+</strong>
                                                </div>
                                                <div className="column">
                                                    <span>Ticket-Type:</span>
                                                    <strong>E-Ticket</strong>
                                                </div>
                                            </div>
                                            <div className="price-holder">
                                                <h3>$310.00</h3>
                                                <button type="button">Select Ticket</button>
                                            </div>
                                        </div>
                                        <div className="ticket">
                                            <div className="ticket-holder">
                                                <img src={ticket} alt="#" />
                                            </div>
                                            <div className="cols flex v-center">
                                                <div className="column">
                                                    <span>Category:</span>
                                                    <strong>Golden Circle - GC</strong>
                                                    <span>Section:</span>
                                                    <strong>Golden Circle</strong>
                                                </div>
                                                <div className="column">
                                                    <span>Tickets:</span>
                                                    <strong>No of Tickets: 7</strong>
                                                    <span>Restriction:</span>
                                                    <strong>Age Limit 21+</strong>
                                                </div>
                                                <div className="column">
                                                    <span>Ticket-Type:</span>
                                                    <strong>E-Ticket</strong>
                                                </div>
                                            </div>
                                            <div className="price-holder">
                                                <h3>$310.00</h3>
                                                <button type="button">Select Ticket</button>
                                            </div>
                                        </div>
                                        <div className="ticket yellow">
                                            <div className="ticket-holder">
                                                <img src={ticket} alt="#" />
                                            </div>
                                            <div className="cols flex v-center">
                                                <div className="column">
                                                    <span>Category:</span>
                                                    <strong>Golden Circle - GC</strong>
                                                    <span>Section:</span>
                                                    <strong>Golden Circle</strong>
                                                </div>
                                                <div className="column">
                                                    <span>Tickets:</span>
                                                    <strong>No of Tickets: 7</strong>
                                                    <span>Restriction:</span>
                                                    <strong>Age Limit 21+</strong>
                                                </div>
                                                <div className="column">
                                                    <span>Ticket-Type:</span>
                                                    <strong>E-Ticket</strong>
                                                </div>
                                            </div>
                                            <div className="price-holder">
                                                <h3>$310.00</h3>
                                                <button type="button">Select Ticket</button>
                                            </div>
                                        </div>
                                        <div className="ticket yellow">
                                            <div className="ticket-holder">
                                                <img src={ticket} alt="#" />
                                            </div>
                                            <div className="cols flex v-center">
                                                <div className="column">
                                                    <span>Category:</span>
                                                    <strong>Golden Circle - GC</strong>
                                                    <span>Section:</span>
                                                    <strong>Golden Circle</strong>
                                                </div>
                                                <div className="column">
                                                    <span>Tickets:</span>
                                                    <strong>No of Tickets: 7</strong>
                                                    <span>Restriction:</span>
                                                    <strong>Age Limit 21+</strong>
                                                </div>
                                                <div className="column">
                                                    <span>Ticket-Type:</span>
                                                    <strong>E-Ticket</strong>
                                                </div>
                                            </div>
                                            <div className="price-holder">
                                                <h3>$310.00</h3>
                                                <button type="button">Select Ticket</button>
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

export default TicketView