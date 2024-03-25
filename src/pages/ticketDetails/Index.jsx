import "./ticketDetails.css";
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import SmallBanner from "../../components/core/small-banner/Index";
import Slider from "../../components/slider/slider";


const TicketDetails = () => {
    const { ticketId, ticketName } = useParams();

    return(
        <>
            <div className="about-area">
                <Header />
                <main id="main">
                    <Slider />
                    <SmallBanner
                        bannerHeading="SELL YOUR TICKETS ON LAST CHANCE TICKET"
                        bannerText="Last chance ticket helps you to sell the tickets quickly by making your listing available to millions of customers around the world."
                    />
                    <div className="container text-holder">
                        <h1 className="text-center fluid uppercase">What we do <span>{ticketName}</span></h1>
                        <Swiper
                                navigation
                                pagination={false}
                                slidesPerView={3}
                                spaceBetween={20} // Add this line to set the gap between slides
                                autoplay={{
                                    delay: 3000, // Adjust the delay as needed (in milliseconds)
                                    disableOnInteraction: false, // Set to false to keep autoplaying even when user interacts with the slider
                                  }}
                                className="mySwiper detailsSlider"
                                breakpoints={{
                                    767: {
                                        slidesPerView: 3,
                                    },
                                    480: {
                                        slidesPerView: 1,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    },
                                }}
                            >

                                <SwiperSlide>
                                    <div className="slide-item">
                                        <h2>Formula One Sao Paulo - 3 Day Pass</h2>
                                        <span className="location">Sports <em>LCT</em></span>
                                        <div className="ticketDetails">
                                            <h4>Ticket Details:</h4>
                                            <ul className="list-none">
                                                <li>
                                                    <span>Time:</span>
                                                    <span>09:00</span>
                                                </li>
                                                <li>
                                                    <span>Date:</span>
                                                    <span>24-11-2023</span>
                                                </li>
                                                <li>
                                                    <span>Location:</span>
                                                    <span>Singapore</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link className="sellBtn" to="/login">Sell Tickets Here</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <h2>Formula One Sao Paulo - 3 Day Pass</h2>
                                        <span className="location">Sports <em>LCT</em></span>
                                        <div className="ticketDetails">
                                            <h4>Ticket Details:</h4>
                                            <ul className="list-none">
                                                <li>
                                                    <span>Time:</span>
                                                    <span>09:00</span>
                                                </li>
                                                <li>
                                                    <span>Date:</span>
                                                    <span>24-11-2023</span>
                                                </li>
                                                <li>
                                                    <span>Location:</span>
                                                    <span>Singapore</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link className="sellBtn" to="/login">Sell Tickets Here</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <h2>Formula One Sao Paulo - 3 Day Pass</h2>
                                        <span className="location">Sports <em>LCT</em></span>
                                        <div className="ticketDetails">
                                            <h4>Ticket Details:</h4>
                                            <ul className="list-none">
                                                <li>
                                                    <span>Time:</span>
                                                    <span>09:00</span>
                                                </li>
                                                <li>
                                                    <span>Date:</span>
                                                    <span>24-11-2023</span>
                                                </li>
                                                <li>
                                                    <span>Location:</span>
                                                    <span>Singapore</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link className="sellBtn" to="/login">Sell Tickets Here</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <h2>Formula One Sao Paulo - 3 Day Pass</h2>
                                        <span className="location">Sports <em>LCT</em></span>
                                        <div className="ticketDetails">
                                            <h4>Ticket Details:</h4>
                                            <ul className="list-none">
                                                <li>
                                                    <span>Time:</span>
                                                    <span>09:00</span>
                                                </li>
                                                <li>
                                                    <span>Date:</span>
                                                    <span>24-11-2023</span>
                                                </li>
                                                <li>
                                                    <span>Location:</span>
                                                    <span>Singapore</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link className="sellBtn" to="/login">Sell Tickets Here</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <h2>Formula One Sao Paulo - 3 Day Pass</h2>
                                        <span className="location">Sports <em>LCT</em></span>
                                        <div className="ticketDetails">
                                            <h4>Ticket Details:</h4>
                                            <ul className="list-none">
                                                <li>
                                                    <span>Time:</span>
                                                    <span>09:00</span>
                                                </li>
                                                <li>
                                                    <span>Date:</span>
                                                    <span>24-11-2023</span>
                                                </li>
                                                <li>
                                                    <span>Location:</span>
                                                    <span>Singapore</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link className="sellBtn" to="/login">Sell Tickets Here</Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default TicketDetails