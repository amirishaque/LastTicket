import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import SmallBanner from "../../components/core/small-banner/Index";
import './style/contact.css'
import Slider from "../../components/slider/slider-banner";

const Contact = () => {
    return (
        <>
            <div className="contact-page">
                <Header />
                <main id="main">
                    <Slider/>
                    <SmallBanner bannerHeading="Contact Us" bannerText={"Here is the last chance to be the member of worlds leading ticket marketplace for live events around the world."} />
                    <section className="contact-us-wrapper">
                        <div className="left-contact-us-fragment">
                            <figure>
                                <img src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png" alt="contact us" width={382} height={239} />
                            </figure>
                            <div className="detail">
                                <h2>Nevine Acotanza</h2>
                                <span>Chief Operating Officer</span>
                                <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                                <div className="contact-detail">
                                    <div className="contact-detail-inner">
                                        <div className="email-wrapper">
                                            <span>Email for: </span>
                                            <div className="detail-email">
                                                <div className="email">
                                                    <span>
                                                        <svg width="60px" height="60px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16 7.184C16 3.14 12.86 0 9 0S2 3.14 2 7c-1.163.597-2 1.696-2 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1 5 5 0 0 1 10 0 1 1 0 0 0-1 1v6a1 1 0 0 0 1 1v1h-2.592c-.206-.581-.756-1-1.408-1H8a1.5 1.5 0 0 0 0 3h6a2 2 0 0 0 2-2v-1.183A2.992 2.992 0 0 0 18 12v-2a2.99 2.99 0 0 0-2-2.816L-7 62" fill="#22B3C1" fill-rule="evenodd" />
                                                        </svg>
                                                    </span><a href="mailto:admin@example.com"> admin@example.com </a>
                                                </div>
                                                <div className="email">
                                                    <span>
                                                        <svg width="60px" height="60px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16 7.184C16 3.14 12.86 0 9 0S2 3.14 2 7c-1.163.597-2 1.696-2 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1 5 5 0 0 1 10 0 1 1 0 0 0-1 1v6a1 1 0 0 0 1 1v1h-2.592c-.206-.581-.756-1-1.408-1H8a1.5 1.5 0 0 0 0 3h6a2 2 0 0 0 2-2v-1.183A2.992 2.992 0 0 0 18 12v-2a2.99 2.99 0 0 0-2-2.816L-7 62" fill="#22B3C1" fill-rule="evenodd" />
                                                        </svg>
                                                    </span><a href="mailto:admin@example.com"> admin@example.com </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-detail-inner">
                                        <div className="email-wrapper">
                                            <span>Phone: </span>
                                            <div className="detail-email">
                                                <div className="email">
                                                    <span><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#22B3C1" />
                                                    </svg></span>
                                                    <a href="tel:+12763293991"> +12763293991 </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-contact-us-fragment">
                            <form>
                                <div className="input-wrapper">
                                    <div className="name-wrapper">
                                        <div className="label-wrapper">
                                            <label>First Name</label>
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                        <div className="label-wrapper">
                                            <label>Last Name</label>
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>Email Address</label>
                                        <input type="text" placeholder="Email Address" />
                                    </div>
                                    <div className="label-wrapper">
                                        <label>Phone Number</label>
                                        <input type="number" placeholder="Phone Number" />
                                    </div>
                                    {/* <div className="label-wrapper">
                                        <label>Country</label>
                                        <input type="text" placeholder="xyz" />
                                    </div>
                                    <div className="label-wrapper">
                                        <label>Purpose</label>
                                        <input type="text" placeholder="xyz" />
                                    </div> */}
                                    <div className="label-wrapper">
                                        <label>Message</label>
                                        <textarea placeholder="Please write here" />
                                    </div>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </section>
                    {/* <div className="contact-cols">
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
                    </div> */}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Contact