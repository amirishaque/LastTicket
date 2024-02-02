import "./requestEvent.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import SmallBanner from "../../components/core/small-banner/Index";
import callIcon from "../../assets/images/call.svg";
import mailIcon from "../../assets/images/mail.svg";
import locationIcon from "../../assets/images/foot-location.svg";


const RequestEvent = () => {
    return(
        <>
            <div className="about-area">
                <Header />
                <main id="main">
                    <SmallBanner bannerHeading="Create Your Event Request" bannerText="LAST CHANCE TICKET" />
                    <div className="container text-holder">
                        <div className="boxes-holder">
                            <h2>Get in <span>Touch</span> With <span>Us</span></h2>
                            <div className="boxes">
                                <div className="box">
                                    <div className="ico-holder"><img src={callIcon} alt="#" /></div>
                                    <strong>Make a Phone Call</strong>
                                    <div className="text-holder"><a href="tel:+12763293991">+1 276 329 3991</a></div>
                                </div>
                                <div className="box">
                                    <div className="ico-holder"><img src={mailIcon} alt="#" /></div>
                                    <strong>Contact Us via Email</strong>
                                    <div className="text-holder"><a href="mailto:sales@lastchanceticket.com">sales@lastchanceticket.com</a></div>
                                </div>
                                <div className="box">
                                    <div className="ico-holder"><img src={locationIcon} alt="#" /></div>
                                    <strong>Visit Our Offices</strong>
                                <div className="text-holder">
                                        <address>30 N Gould St Ste R Sheridan, Wyoming 82801, United States</address>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-area">
                            <h2>Create Your <span>Event Request</span> Through This <span>Form</span></h2>
                            <form className="form">
                                <div className="formRow">
                                    <div className="formCol">
                                        <label htmlFor="eventTitle">Title</label>
                                        <input type="text" placeholder="Enter Event Title Here" />
                                    </div>
                                    <div className="formCol">
                                        <label htmlFor="category">Event Category</label>
                                        <input type="text" placeholder="Event Category" />
                                    </div>
                                </div>
                                <div className="formRow">
                                    <div className="formCol">
                                        <label htmlFor="venueName">Venue Name</label>
                                        <input type="text" placeholder="Venue Name" />
                                    </div>
                                    <div className="formCol">
                                        <label htmlFor="eventDate">Event Date</label>
                                        <input type="date" />
                                    </div>
                                </div>
                                <div className="formRow">
                                    <div className="formCol">
                                        <label htmlFor="startTime">Start Time</label>
                                        <input type="time" />
                                    </div>
                                    <div className="formCol">
                                        <label htmlFor="endTime">End Time</label>
                                        <input type="time" />
                                    </div>
                                </div>
                                <div className="formRow">
                                    <div className="formCol">
                                        <label htmlFor="location">Location</label>
                                        <input type="text" placeholder="Enter Location" />
                                    </div>
                                    <div className="formCol">
                                        <label htmlFor="country">Country</label>
                                        <select>
                                            <option>Options</option>
                                            <option>Options</option>
                                            <option>Options</option>
                                            <option>Options</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="formRow">
                                    <div className="formCol fluid">
                                        <label htmlFor="url">URL</label>
                                        <input type="text" placeholder="Enter URL" />
                                    </div>
                                </div>
                                <div className="formRow button">
                                    <div className="formCol fluid">
                                        <input type="submit" value="Create Event Request" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default RequestEvent