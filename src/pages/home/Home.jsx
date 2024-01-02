import "./home.css";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { Swiper , SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import BannerImg from "../../assets/images/landing-banner.jpg"
import MailIcon from "../../assets/images/everyone-email.svg"
import AboutImg from "../../assets/images/about-img.png"
import FeaturedImg1 from "../../assets/images/featured-1.png"
import FeaturedImg2 from "../../assets/images/featured-2.png"
import FeaturedImg3 from "../../assets/images/featured-3.png"
import slide1 from "../../assets/images/image1.jpeg";
import slide2 from "../../assets/images/image2.jpeg";
import slide3 from "../../assets/images/image3.jpeg";
import slide4 from "../../assets/images/image4.jpg";
import { ctaBtnIcon } from "../../utils/SvgIcons"
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";


const Home = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [nav, setNav] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    const showNav = (e) => {
         setNav(!nav);

    }
    return(
        <>
            <div className="landing__page">
                <Header />
                <div className="hero__banner" id="home">
                    <div className="site__container">
                        <div className="hero__content">
                            <div className="hero__title">
                                <h1>Last Chance Ticket (LCT) is a ticket marketplace based in the state of Wyoming in the United States.</h1>
                            </div>
                            <div className="hero__img">
                                <img src={BannerImg} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="everyone__love">
                    <div className="site__container">
                        <div className="everyone__content d__flex d__flex-h-between d__flex-v-center">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="mail__icon">
                                <img src={MailIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about__us" id="about">
                    <div className="site__container">
                        <div className="about__content d__flex d__flex-h-between d__flex-v-center">
                            <div className="about__img">
                                <img src={AboutImg} />
                            </div>
                            <div  className="about__info">
                                <h1>About <br/>Last Chance Ticket <span className="text__decoration">Letter</span>...</h1>
                                <p>Last Chance Ticket (LCT) is a ticket marketplace based in the state of Wyoming in the United States. Our mission is to provide a safe and secure platform for ticket buyers and sellers to exchange tickets for events.</p>
                                <NavLink to="/about" className="cta__btn">
                                    Learn More 
                                    {ctaBtnIcon()}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="our__featured">
                    <div className="site__container">
                        <div className="featured__content">

                            <div className="featured__box d__flex d__flex-h-between">
                                <div className="featured__box-item">
                                    <img src={FeaturedImg1} />
                                    <div className="featured__box-content">
                                        <h3>Service 1</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                    </div>
                                </div>
                                <div className="featured__box-item">
                                    <img src={FeaturedImg2} />
                                    <div className="featured__box-content">
                                    <h3>Service 2</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                    </div>
                                </div>
                                <div className="featured__box-item">
                                    <img src={FeaturedImg3} />
                                    <div className="featured__box-content">
                                    <h3>Service 3</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial__section site__container">
                    <strong className="events-heading">Popular Events</strong>
                <Swiper
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={false}
                        slidesPerView={4}
                        spaceBetween={10}
                        modules={[Pagination]}
                        className="mySwiper desktop-swiper"
                    >
                        <SwiperSlide>
                            <div className="testimonials__slide">
                                <img src={slide1} alt="#" />
                                <strong>Bryan Adams</strong>
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__slide">
                                <img src={slide2} alt="#" />
                                <strong>Trevor Noah</strong>
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__slide">
                                <img src={slide3} alt="#" />
                                <strong>Kiss</strong>
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__slide">
                                <img src={slide4} alt="#" />
                                <strong>UFC 294 Abu Dhabi : Islam Makhachev vs Oliveira 2</strong>
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__slide">
                                <img src={slide1} alt="#" />
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__slide">
                                <img src={slide2} alt="#" />
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__slide">
                                <img src={slide3} alt="#" />
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__slide">
                                <img src={slide4} alt="#" />
                            </div> 
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="contact__section" id="contact">
                    <div className="site__container">
                        <div className="contact__content">
                            <h2>Last Chance Ticket is one of the world’s leading ticket marketplace for both buyers and resellers. We are not the primary ticket source. Our platform enables sellers to resell tickets, which may be priced above or below face value</h2>
                            <button  className="cta__btn white__cta">Contact Us</button>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        </>
    )
}

export default Home