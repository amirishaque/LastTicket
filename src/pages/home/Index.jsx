import "./home.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import image1 from "../../assets/images/img1.png";
import image2 from "../../assets/images/img2.png";
import image3 from "../../assets/images/img3.png";
import arrow from "../../assets/images/arrow.png";
import image4 from "../../assets/images/img4.png";
import image5 from "../../assets/images/img5.png";
import image6 from "../../assets/images/img6.png";
import locationIcon from "../../assets/images/location-icon.png";
import promoImage from "../../assets/images/promo-image.svg";
import image7 from "../../assets/images/img7.png";
import image8 from "../../assets/images/img8.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";



const Home = () => {
    return(
        <>
            <div className="home-page">
                <Header />
                <main id="main">
                    <section className="banner">
                        <div className="text">
                            <div className="holder">
                                <h1><span>Purchase tickets</span> for a range of events</h1>
                                <p>Your next best-night-ever is waiting. And we have the tickets.</p>
                                <form className="search-form">
                                    <input type="text" placeholder="Search For An Event" />
                                    <input type="submit" value="Search" />
                                </form>
                            </div>
                        </div>
                    </section>
                    <section className="cols top-cols">
                        <div className="container flex column-direction">
                            <h2 className="sec-heading">Top Event Lists</h2>
                            <div className="columns flex">
                                <div className="column">
                                    <img src={image1} alt="#" />
                                    <strong><Link to="/">Sports</Link></strong>
                                </div>
                                <div className="column">
                                    <img src={image2} alt="#" />
                                    <strong><Link to="/">Concerts</Link></strong>
                                </div>
                                <div className="column">
                                    <img src={image3} alt="#" />
                                    <strong><Link to="/">Theater / Comedy Shows</Link></strong>
                                </div>
                            </div>
                            <div className="link-holder"><Link to="/all-events">View Events <img src={arrow} alt="->" /></Link></div>
                        </div>
                    </section>
                    <section className="cols">
                        <div className="container flex column-direction">
                            <h2 className="sec-heading">Featured Events On Sale Today</h2>
                            <Swiper
                                navigation
                                pagination={false}
                                slidesPerView={3}
                                autoplay={{
                                    delay: 3000, // Adjust the delay as needed (in milliseconds)
                                    disableOnInteraction: false, // Set to false to keep autoplaying even when user interacts with the slider
                                  }}
                                className="mySwiper"
                                breakpoints={{
                                    767: {
                                        slidesPerView: 3,
                                    },
                                    480: {
                                        slidesPerView: 2,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    },
                                }}
                            >

                                <SwiperSlide>
                                    <div className="slide-item">
                                        <img src={image4} alt="img"/>
                                        <h2>Billy Joel & Stevie Nicks</h2>
                                        <span className="location">
                                            <img src={locationIcon} alt="#" />
                                            New York, United States
                                        </span>
                                        <strong className="price">From $80</strong>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <img src={image5} alt="img"/>
                                        <h2>Billy Joel & Stevie Nicks</h2>
                                        <span className="location">
                                            <img src={locationIcon} alt="#" />
                                            New York, United States
                                        </span>
                                        <strong className="price">From $80</strong>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <img src={image6} alt="img"/>
                                        <h2>Billy Joel & Stevie Nicks</h2>
                                        <span className="location">
                                            <img src={locationIcon} alt="#" />
                                            New York, United States
                                        </span>
                                        <strong className="price">From $80</strong>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <img src={image4} alt="img"/>
                                        <h2>Billy Joel & Stevie Nicks</h2>
                                        <span className="location">
                                            <img src={locationIcon} alt="#" />
                                            New York, United States
                                        </span>
                                        <strong className="price">From $80</strong>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <img src={image5} alt="img"/>
                                        <h2>Billy Joel & Stevie Nicks</h2>
                                        <span className="location">
                                            <img src={locationIcon} alt="#" />
                                            New York, United States
                                        </span>
                                        <strong className="price">From $80</strong>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <img src={image6} alt="img"/>
                                        <h2>Billy Joel & Stevie Nicks</h2>
                                        <span className="location">
                                            <img src={locationIcon} alt="#" />
                                            New York, United States
                                        </span>
                                        <strong className="price">From $80</strong>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="link-holder"><Link to="/all-events">View Events <img src={arrow} alt="->" /></Link></div>
                        </div>
                        
                    </section>
                    <section className="cols">
                        <div className="container flex column-direction">
                            <h2 className="sec-heading">Popular Venues</h2>
                            <Swiper
                                navigation
                                autoplay={{
                                    delay: 3000, // Adjust the delay as needed (in milliseconds)
                                    disableOnInteraction: false, // Set to false to keep autoplaying even when user interacts with the slider
                                  }}
                                pagination={false}
                                slidesPerView={2}
                                className="mySwiper"
                            >

                                {/* <SwiperSlide>
                                    <div className="slide-item">
                                        <img src={image4} alt="img"/>
                                        <h2>Billy Joel & Stevie Nicks</h2>
                                        <span className="location">
                                            <img src={locationIcon} alt="#" />
                                            New York, United States
                                        </span>
                                        <strong className="price">From $80</strong>
                                    </div>
                                </SwiperSlide> */}
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <img src={image8} alt="img"/>
                                        <h2>Billy Joel & Stevie Nicks</h2>
                                        <span className="location">
                                            <img src={locationIcon} alt="#" />
                                            New York, United States
                                        </span>
                                        <strong className="price">From $80</strong>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <img src={image7} alt="img"/>
                                        <h2>Billy Joel & Stevie Nicks</h2>
                                        <span className="location">
                                            <img src={locationIcon} alt="#" />
                                            New York, United States
                                        </span>
                                        <strong className="price">From $80</strong>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <img src={image7} alt="img"/>
                                        <h2>Billy Joel & Stevie Nicks</h2>
                                        <span className="location">
                                            <img src={locationIcon} alt="#" />
                                            New York, United States
                                        </span>
                                        <strong className="price">From $80</strong>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-item">
                                        <img src={image7} alt="img"/>
                                        <h2>Billy Joel & Stevie Nicks</h2>
                                        <span className="location">
                                            <img src={locationIcon} alt="#" />
                                            New York, United States
                                        </span>
                                        <strong className="price">From $80</strong>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="link-holder"><Link to="/all-events">View Events <img src={arrow} alt="->" /></Link></div>
                        </div>
                    </section>
                    <section class="news-section">
                        <div class="container">
                            <div class="news-area">
                                <div class="newsletter">
                                    <h3>Join the <span>newsletter</span> to learn about future events</h3>
                                    <p>Join the newsletter to and get 10% discount on your first ticket purchase.</p>
                                    <input type="email" placeholder="Enter Email Address" />
                                    <a href="#.">Subscribe</a>
                                </div>
                                <div class="news-img">
                                    <img src={promoImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Home