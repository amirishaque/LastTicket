import "./about.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";

const About = () => {
    return(
        <>
            <div className="landing__page">
                <Header />
                    <div className="about__holder">
                        <div className="small__banner">
                            <div className="container">
                                <h1>ABOUT US</h1>
                            </div>
                        </div>
                        <div className="container about__text">
                            <p>Last Chance Ticket (LCT) is a ticket marketplace based in the state of Wyoming in the United States. Our mission is to provide a safe and secure platform for ticket buyers and sellers to exchange tickets for events.</p>
                            <p>With LCT, you can buy and sell tickets for concerts, sporting events, theater shows, and more. Our userfriendly platform and commitment to customer service make buying and selling tickets easier and more convenient than ever.</p>
                            <p>At LCT, we are committed to following all applicable laws and regulations in Wyoming and the United States. We take the privacy and security of our users seriously, and have implemented measures to protect personal information and prevent fraud.</p>
                            <p>Whether you're a seasoned ticket buyer or seller, or new to the ticket marketplace, LCT is here to help. We are dedicated to providing a seamless ticket buying and selling experience, and look forward to serving you.</p>
                            <p className="info">
                                Email : <a href="mailto:info@lastchanceticket.com">info@lastchanceticket.com</a> <br />

                                Address : 30 N Gould St Ste R Sheridan, Wyoming 82801, United States <br />

                                Contact Us : <a href="tel:+1 276 329 3991">+1 276 329 3991</a> <br />

                                Facebook :  <a href="https://www.facebook.com/profile.php?id=100091981194183&mibextid=LQQJ4d">Last Chance Ticket</a> <br />
                            </p>
                        </div>
                    </div>
                <Footer />

            </div>
        </>
    )
}

export default About;