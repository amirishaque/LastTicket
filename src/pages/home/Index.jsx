import SwiperCore, { Navigation } from 'swiper';
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
import "./banner.css";
import "./top-events.css";
import './home.css';
import React, { useState, useEffect } from 'react';
import Slider from '../../components/slider/slider';

SwiperCore.use([Navigation]);

const Home = () => {
	const [placeholderText, setPlaceholderText] = useState('');
	// Update this line with the new text
	const text = 'Search here';
	let index = 0;
	let typing = true;

	useEffect(() => {
		function animatePlaceholder() {
			if (typing) {
				if (index < text.length) {
					setPlaceholderText((prev) => prev + text.charAt(index));
					index++;
					setTimeout(animatePlaceholder, 200); // Adjust typing speed
				} else {
					setTimeout(animatePlaceholder, 1000); // Pause before deleting
					typing = false;
				}
			} else {
				if (index > 0) {
					setPlaceholderText((prev) => prev.substring(0, prev.length - 1));
					index--;
					setTimeout(animatePlaceholder, 100); // Adjust deleting speed
				} else {
					setTimeout(animatePlaceholder, 1000); // Pause before typing again
					typing = true;
				}
			}
		}

		animatePlaceholder();
		// Cleanup function to clear the timeout if the component unmounts
		return () => clearTimeout(animatePlaceholder);
	}, []);


	return (
		<>
			<div className="home-page">

				<main id="main">
					{/* <section className="banner">
                        <div className="">
                            <marquee behavior="scroll" direction="left" style={{ color: '#fff' }}>
                                Hurray! You are in the right place * 100K+ social media followers * We value every custome
                            </marquee>
                            <div className="holder py-md-5 py-3">

                                <h1><span>Purchase tickets</span> for a range of events</h1>
                                <p>Your next best-night-ever is waiting. And we have the tickets.</p>
                                <form className="search-form">
                                    <input type="text" placeholder="Search For An Event" />
                                    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="20" width="20"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" id="mainIconPathAttribute" fill="#ffffff"></path></svg></button>
                                </form>
                            </div>
                        </div>
                    </section> */}
					<section className='header-banner-wrapper'>
						<Header />
						<section className="banner-wrapper">
							<Slider/>
							<div className='banner-wrapper-inner'>
								<h2>WELCOME TO Score Tickets</h2>
								<h1>Unlock Adventures, Seize Moments, Live Dreams</h1>
								<p>Your unforgettable night awaits. We've got the tickets for your next amazing experience.</p>
								<form>
									<input type='text' placeholder={placeholderText} />
									<button type='submit'>
										<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</button>
								</form>
							</div>
						</section>
					</section>
					{/* <section className="cols topEvt" style={{ background: "#13100f" }}>
						<div className=" flex column-direction">
							<h2 className="sec-heading color_white" >Top Events</h2>
							<div className="row mx-0 w-100 topEvtRow ">
								<div className="col-md-3 col-12 mb-3 hv_events">
									<Link to="/ticket/1/view"><img src={image2} alt="#" /></Link>
								</div>
								<div className="col-md-3 col-12 mb-3 hv_events">
									<Link to="/ticket/1/view"><img src={image3} alt="#" /></Link>
								</div>
								<div className="col-md-3 col-12  mb-3 hv_events">
									<Link to="/ticket/1/view"><img src={image1} alt="#" /></Link>
								</div>
								<div className="col-md-3 col-12  mb-3 hv_events">
									<Link to="/ticket/1/view"><img src={image1} alt="#" /></Link>
								</div>
							</div>
						</div>
					</section> */}
					<section className='top-events-wrapper'>
						<h2>Top Events</h2>
						<div className='image-wrapper'>
							<div className='image-box'>
								<Link to="/ticket/1/view">
									<figure>
										<img src={image2} alt="#" width={450} height={327} />
									</figure>
								</Link>
							</div>
							<div className='image-box'>
								<Link to="/ticket/1/view">
									<figure>
										<img src={image3} alt="#" width={450} height={327} />
									</figure>
								</Link>
							</div>
							<div className='image-box'>
								<Link to="/ticket/1/view">
									<figure>
										<img src={image1} alt="#" width={450} height={327} />
									</figure>
								</Link>
							</div>
							<div className='image-box'>
								<Link to="/ticket/1/view">
									<figure>
										<img src={image2} alt="#" width={450} height={327} />
									</figure>
								</Link>
							</div>
						
						</div>
						<div className='white-overlay'></div>
					</section>
					<section className="cols featuredEvt" style={{ marginTop: "120px" }}>
						<div className="container flex column-direction">
							<h2 className="sec-heading">Featured Events On Sale Today</h2>
							<div className="d-md-flex justify-content-between filture_list p-3">
								<div className="d-md-flex">
									<span className="fw-bold">Filtured By:</span>
									<ul className="d-flex">
										<li>All</li>
										<li>Sports</li>
										<li>Concerts</li>
										<li>Festivals</li>
										<li>Theaters</li>
									</ul>
								</div>
								<form className="filters-form " style={{ width: "25%" }}>
									<select className="w-100">
										<option>Fill By Ticket Type</option>
										<option>All Tickets</option>
										<option>Paper Ticket</option>
										<option>E-Ticket</option>
										<option>Mobile Ticket</option>
									</select>
								</form>
							</div>
							<div className=" row flex">
								<div className="col-md-4 col-12 mb-4 hv_events">
									<div className="slide-item">
										<img src={image4} alt="img" />
										<h2>Billy Joel & Stevie Nicks</h2>
										<span className="location">
											<img src={locationIcon} alt="#" />
											New York, United States
										</span>
										<strong className="price">From $80</strong>
									</div>
								</div>
								<div className="col-md-4 col-12 mb-4 hv_events">
									<div className="slide-item">
										<img src={image5} alt="img" />
										<h2>Billy Joel & Stevie Nicks</h2>
										<span className="location">
											<img src={locationIcon} alt="#" />
											New York, United States
										</span>
										<strong className="price">From $80</strong>
									</div>
								</div>
								<div className="col-md-4 col-12 mb-4 hv_events">
									<div className="slide-item">
										<img src={image6} alt="img" />
										<h2>Billy Joel & Stevie Nicks</h2>
										<span className="location">
											<img src={locationIcon} alt="#" />
											New York, United States
										</span>
										<strong className="price">From $80</strong>
									</div>
								</div>
							</div>
							<div className=" row flex">
								<div className="col-md-4 col-12 mb-4 hv_events">
									<div className="slide-item">
										<img src={image4} alt="img" />
										<h2>Billy Joel & Stevie Nicks</h2>
										<span className="location">
											<img src={locationIcon} alt="#" />
											New York, United States
										</span>
										<strong className="price">From $80</strong>
									</div>
								</div>
								<div className="col-md-4 col-12 mb-4 hv_events">
									<div className="slide-item">
										<img src={image5} alt="img" />
										<h2>Billy Joel & Stevie Nicks</h2>
										<span className="location">
											<img src={locationIcon} alt="#" />
											New York, United States
										</span>
										<strong className="price">From $80</strong>
									</div>
								</div>
								<div className="col-md-4 col-12 mb-4 hv_events">
									<div className="slide-item">
										<img src={image6} alt="img" />
										<h2>Billy Joel & Stevie Nicks</h2>
										<span className="location">
											<img src={locationIcon} alt="#" />
											New York, United States
										</span>
										<strong className="price">From $80</strong>
									</div>
								</div>
							</div>
							<div className=" row flex">
								<div className="col-md-4 col-12 mb-4 hv_events">
									<div className="slide-item">
										<img src={image4} alt="img" />
										<h2>Billy Joel & Stevie Nicks</h2>
										<span className="location">
											<img src={locationIcon} alt="#" />
											New York, United States
										</span>
										<strong className="price">From $80</strong>
									</div>
								</div>
								<div className="col-md-4 col-12 mb-4 hv_events">
									<div className="slide-item">
										<img src={image5} alt="img" />
										<h2>Billy Joel & Stevie Nicks</h2>
										<span className="location">
											<img src={locationIcon} alt="#" />
											New York, United States
										</span>
										<strong className="price">From $80</strong>
									</div>
								</div>
								<div className="col-md-4 col-12 mb-4 hv_events">
									<div className="slide-item">
										<img src={image6} alt="img" />
										<h2>Billy Joel & Stevie Nicks</h2>
										<span className="location">
											<img src={locationIcon} alt="#" />
											New York, United States
										</span>
										<strong className="price">From $80</strong>
									</div>
								</div>
							</div>
							{/* <div className="link-holder"><Link to="#">View Events <img src={arrow} alt="->" /></Link></div> */}
						</div>

					</section>

					<section className="p-5 p-md-3" style={{ background: "#EDEDED" }}>
						<div className="container">
							<h2 className="w-100 text-center" style={{ fontSize: "60px", fontWeight: "400" }}>Excellent</h2>
							<div className="d-flex m-auto">
								<div className=" bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
								<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
								<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
								<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
								<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
								<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>

							</div>
							<h4 className="w-100 text-center py-3">Based on 1,559 reviews</h4>
							<div className="m-auto d-flex">
								<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#00b67a"></path> </svg>

								<h3>Trustpilot</h3>
							</div>


							<Swiper
								navigation
								pagination={false}
								slidesPerView={4}
								autoplay={{
									delay: 3000, // Adjust the delay as needed (in milliseconds)
									disableOnInteraction: false, // Set to false to keep autoplaying even when user interacts with the slider
								}}
								//   navigation={{
								//     prevEl: '.swiper-button-prev',
								//     nextEl: '.swiper-button-next',
								//   }}
								className="mySwiper"
								breakpoints={{
									767: {
										slidesPerView: 4,
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
										<div className="d-flex">
											<div className=" bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>

										</div>
										<div className="text-start pe-2">
											<h2>Ecellent service</h2>
											<p>Exellent service, trusted people, Sometimes fees are to expensive but ok. William Castellanos, 3 days ago</p>
										</div>

									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="slide-item">
										<div className="d-flex">
											<div className=" bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>

										</div>
										<div className="text-start pe-2">
											<h2>Ecellent service</h2>
											<p>Exellent service, trusted people, Sometimes fees are to expensive but ok. William Castellanos, 3 days ago</p>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="slide-item">
										<div className="d-flex">
											<div className=" bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>

										</div>
										<div className="text-start pe-2">
											<h2>Ecellent service</h2>
											<p>Exellent service, trusted people, Sometimes fees are to expensive but ok. William Castellanos, 3 days ago</p>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="slide-item">
										<div className="d-flex">
											<div className=" bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>

										</div>
										<div className="text-start pe-2">
											<h2>Ecellent service</h2>
											<p>Exellent service, trusted people, Sometimes fees are to expensive but ok. William Castellanos, 3 days ago</p>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="slide-item">
										<div className="d-flex">
											<div className=" bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>

										</div>
										<div className="text-start pe-2">
											<h2>Ecellent service</h2>
											<p>Exellent service, trusted people, Sometimes fees are to expensive but ok. William Castellanos, 3 days ago</p>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="slide-item">
										<div className="d-flex">
											<div className=" bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>
											<div className="  bg_green me-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></div>

										</div>
										<div className="text-start pe-2">
											<h2>Ecellent service</h2>
											<p>Exellent service, trusted people, Sometimes fees are to expensive but ok. William Castellanos, 3 days ago</p>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>

					</section>
					<section class="news-section">
						<div class="container">

							<div class="news-area">
								<div className="row flex">
									<div className="col-md-6 col-12">
										<div class="newsletter">
											<h3>Join the <span>newsletter</span> to learn about future events</h3>
											<p>Join the newsletter to and get 10% discount on your first ticket purchase.</p>
											<div className="d-flex">
												<input type="email" placeholder="Enter Email Address" />
												<a href="#.">Subscribe</a>
											</div>

										</div>
									</div>
									<div className="col-md-6 col-12">
										<div class="news-img">
											<img src={promoImage} alt="" />
										</div>
									</div>

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