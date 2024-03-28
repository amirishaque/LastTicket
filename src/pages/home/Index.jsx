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
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./banner.css";
import "./top-events.css";
import './home.css';
import React, { useState, useEffect, useRef } from 'react';
import Slider from '../../components/slider/Slider.jsx';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// for select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { TypeAnimation } from 'react-type-animation';

SwiperCore.use([Navigation]);

const Home = () => {

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	//For Select 
	const [age, setAge] = React.useState('');

	const handleChangeSelect = (event) => {
		setAge(event.target.value);
	};


	//For Events
	const events = [
		{
			id: 1,
			image: "path/to/image1.jpg",
			name: "Billy Joel & Stevie Nicks",
			location: "New York, United States",
			price: "From $80",
			locationIcon: "path/to/locationIcon.png"
		},
		{
			id: 2,
			image: "path/to/image2.jpg",
			name: "Billy Joel & Stevie Nicks",
			location: "New York, United States",
			price: "From $80",
			locationIcon: "path/to/locationIcon.png"
		},
		{
			id: 3,
			image: "path/to/image2.jpg",
			name: "Billy Joel & Stevie Nicks",
			location: "New York, United States",
			price: "From $80",
			locationIcon: "path/to/locationIcon.png"
		},
		{
			id: 4,
			image: "path/to/image2.jpg",
			name: "Billy Joel & Stevie Nicks",
			location: "New York, United States",
			price: "From $80",
			locationIcon: "path/to/locationIcon.png"
		},
		{
			id: 5,
			image: "path/to/image2.jpg",
			name: "Billy Joel & Stevie Nicks",
			location: "New York, United States",
			price: "From $80",
			locationIcon: "path/to/locationIcon.png"
		},
		{
			id: 6,
			image: "path/to/image2.jpg",
			name: "Billy Joel & Stevie Nicks",
			location: "New York, United States",
			price: "From $80",
			locationIcon: "path/to/locationIcon.png"
		}
		// Add more events as needed
	];


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
					<Header />
					<section className='header-banner-wrapper'>

						<section className="banner-wrapper">
							<Slider />
							<div className='banner-wrapper-inner'>
								<h2>WELCOME TO Last Chance Ticket</h2>
								<h1>Unlock Adventures, Seize Moments, Live Dreams</h1>
								<p>Last Chance Ticket is one of the world's leading secondary ticket marketplaces. Prices may be above or below face value.</p>
								<form>
									{/*<input placeholder={placeholderText} /> */}

									<input
										type="text"
										className="animated-input"
								
									placeholder='Search here'

									/>
									{/* <div className='animation-input'>
										<TypeAnimation
											sequence={[
												'One',
												500,
												'One Two',
												500,
												'One Two Three',
												500,
												'One Two',
												500,
												'One',
												500,
												'',
												500,
											]}
											style={{ fontSize: '2em' }}
											repeat={Infinity}
										/>
									</div> */}
									{/* <input type='text' placeholder='Search for an event here' /> */}
									<button type='submit'>
										<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</button>
								</form>
							</div>
						</section>
					</section>
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
					<section className="feature-events-wrapper">
						<div className="feature-events-wrapper-inner">
							<h2>Featured Events On Sale Today</h2>
							<div className="filter-wrapper">
								<div className="filter-left-fragment">
									<strong>Filtered By: </strong>
									<div className='filter-tabs-wrapper'>
										<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
											<Tabs value={value} onChange={handleChange} centered variant="scrollable"
												scrollButtons="auto"
												aria-label="scrollable auto tabs example">
												<Tab label="All" sx={{ padding: 0 }} />
												<Tab label="Sports" />
												<Tab label="Concerts" />
												<Tab label="Festivals" />
												<Tab label="Theaters" />
											</Tabs>
										</Box>
									</div>
								</div>
								<div className='filter-right-fragment'>
									<Box sx={{ minWidth: 360 }}>
										<FormControl fullWidth >
											<InputLabel id="demo-simple-select-label">Ticket Type</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={age}
												label="Ticket Type"
												onChange={handleChangeSelect}
											>
												<MenuItem value={10}>All Tickets</MenuItem>
												<MenuItem value={20}>Paper Ticket</MenuItem>
												<MenuItem value={30}>E-Ticket</MenuItem>
												<MenuItem value={30}>Mobile Ticket</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</div>

							</div>
							<div className='feature-events-card-wrapper'>
								<div className='feature-events-card-wrapper-inner'>
									{events.map((event) => (
										<div key={event.id} className="card-wrapper">
											<figure>
												<img src={image1} alt="Event" />
											</figure>

											<h3>{event.name}</h3>
											<span className="location">
												<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
													<g>
														<path fill="#231F20" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14 s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z" />
														<path fill="#231F20" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z" />
													</g>
												</svg>
												{event.location}
											</span>
											<strong className="price">{event.price}</strong>
										</div>
									))}
								</div>
							</div>
						</div>

					</section>

					<section className="reviews-wrapper-outer" style={{ background: "#EDEDED", marginBottom: '120px' }}>
						<div className="container reviews-wrapper">
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
					<section class="news-wrapper">
						<div class="news-wrapper-inner">
							<h2>Join the <span>newsletter</span> to learn about future events</h2>
							<p>Join the newsletter to and get 10% discount on your first ticket purchase.</p>
							<div className="email-wrapper">
								<input type="email" placeholder="Enter Email Address" />
								<a href="#.">Subscribe</a>
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