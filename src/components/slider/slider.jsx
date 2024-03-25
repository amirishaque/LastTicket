import SwiperCore, { Navigation } from 'swiper';
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import image1 from "../../assets/images/img1.png";
import image2 from "../../assets/images/img2.png";
import image3 from "../../assets/images/img3.png";
import React, { useState, useEffect } from 'react';
import './style/slider.css'

const Slider = () => {
	return (
		<>
			<marquee className='scroll-marquee' behavior="scroll" direction="left">
				Hurray! You are in the right place * 100K+ social media followers * We value every custome
			</marquee>
		</>
	)
}

export default Slider