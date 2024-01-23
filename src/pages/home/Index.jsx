import "./home.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import image1 from "../../assets/images/img1.png";
import image2 from "../../assets/images/img2.png";
import image3 from "../../assets/images/img3.png";
import arrow from "../../assets/images/arrow.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";



const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
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
                            <div className="columns flex">
                                <Slider {...settings}>
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                    <div>
                                        <h3>5</h3>
                                    </div>
                                    <div>
                                        <h3>6</h3>
                                    </div>
                                </Slider>
                            </div>
                            <div className="link-holder"><Link to="/all-events">View Events <img src={arrow} alt="->" /></Link></div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Home