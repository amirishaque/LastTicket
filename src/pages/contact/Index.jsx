import "./contact.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import SmallBanner from "../../components/core/small-banner/Index";


const Contact = () => {
    return(
        <>
            <div className="contact-page">
                <Header />
                <main id="main">
                    <SmallBanner bannerHeading="Contact Us" bannerText={"Here is the last chance to be the member of worlds leading ticket marketplace for live events around the world."} />
                    <div className="contact-cols">
                        <div className="container">
                            <div className="contact-form-container">
                                <div className="col">
                                    <h3>Ask how we can help you:</h3>
                                    <div className="widgets">
                                        <div className="widget">
                                            <strong>Call Us</strong>
                                            <a href="tel:+12763293991">+1 276 329 3991</a>
                                        </div>
                                        <div className="widget">
                                            <strong>Contact Us via Email</strong>
                                            <div>
                                                <span className="small-title">For Sales:</span> &nbsp;
                                                <a href="mailto:sales@lastchanceticket.com">sales@lastchanceticket.com</a>
                                            </div>
                                            <div>
                                                <span className="small-title">For Support:</span> &nbsp;
                                                <a href="mailto:support@lastchanceticket.com">support@lastchanceticket.com</a>
                                            </div>
                                        </div>
                                        <div className="widget">
                                            <strong>Location</strong>
                                            <address>30 N Gould St Ste R Sheridan, Wyoming 82801, United States</address>
                                        </div>
                                    </div>
                                </div>
                                <div className="col ml-auto">
                                    <form className="contact-form">
                                        <div className="contact-field-flex">
                                            <div className="field-row">
                                                <label htmlFor="input1">First Name</label>
                                                <input id="input1" type="text" placeholder="Enter your first name" />
                                            </div>
                                            <div className="field-row">
                                                <label htmlFor="input2">Last Name</label>
                                                <input id="input2" type="text" placeholder="Enter your last name" />
                                            </div>
                                        </div>
                                        <div className="contact-field-flex">
                                            <div className="field-row">
                                                <label htmlFor="input3">Email Address</label>
                                                <input id="input3" type="text" placeholder="Enter your email" />
                                            </div>
                                            <div className="field-row">
                                                <label htmlFor="input5">Phone Number</label>
                                                <input id="input5" type="text" placeholder="Enter your phone number" />
                                            </div>
                                        </div>
                                        <div className="contact-field-flex">
                                            <div className="field-row">
                                                <label htmlFor="input4">Country</label>
                                                <select id="input4">
                                                    <option selected>Select Country</option>
                                                    <option>Afghanistan</option>
                                                    <option>Pakistan</option>
                                                    <option>USA</option>
                                                    <option>Iraq</option>
                                                    <option>Iran</option>
                                                </select>
                                            </div>
                                            <div className="field-row">
                                                <label htmlFor="input6">Purpose</label>
                                                <select id="input6">
                                                    <option selected>Please Select</option>
                                                    <option>Sales</option>
                                                    <option>Support</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="field-row message-row">
                                            <label htmlFor="input7">Message</label>
                                            <textarea placeholder="Enter your message"></textarea>
                                        </div>
                                        <div className="field-row submit-row">
                                            <input type="submit" value="Contact Now" />
                                        </div>
                                    </form>
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

export default Contact