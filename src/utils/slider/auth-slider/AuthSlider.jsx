import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import './authslider.css'

const AuthSlider = () => {
    return (
        <>
            <div className="auth__slider">
                <Swiper 
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className="auth__slide-item">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/slide-1.jpg`} alt="img"/>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="auth__slide-item">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/slide-1.jpg`} alt="img"/>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.
                            </p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </>
    )
}

export default AuthSlider