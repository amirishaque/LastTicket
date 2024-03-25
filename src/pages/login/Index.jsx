import "./login.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import { Link } from "react-router-dom";
import SmallBanner from "../../components/core/small-banner/Index";
import './style/login.css'

const Login = () => {
    return (
        <>
            <div className="login-page">
                <Header />
                <main id="main">
                    <SmallBanner bannerHeading="Login" bannerText="Here is the last chance to be the member of world’s leading ticket marketplace for live events around the globe." />
                    <section className="login-wrapper">
                        <div className="background-img">
                            <figure>
                                <img src="https://brandio.io/envato/iofrm/html/images/graphic8.svg" alt="background image" width={534} height={442} />
                            </figure>
                        </div>
                        <div className="login-inner-wrapper">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="58" viewBox="0 0 60 58">
                                    <g id="chat_2_" data-name="chat (2)" transform="translate(0 -1)">
                                        <path id="Path_1123" data-name="Path 1123" d="M54.07,1H15.93A5.936,5.936,0,0,0,10,6.93V13H44.07A7.939,7.939,0,0,1,52,20.929V34h2.07A5.936,5.936,0,0,0,60,28.07V6.93A5.936,5.936,0,0,0,54.07,1Z" fill="#fff" opacity="0.446" />
                                        <path id="Path_1124" data-name="Path 1124" d="M44.07,15H5.93A5.936,5.936,0,0,0,0,20.929V42.07A5.936,5.936,0,0,0,5.93,48H12V58a1,1,0,0,0,1.74.673L23.442,48H44.07A5.936,5.936,0,0,0,50,42.07V20.929A5.936,5.936,0,0,0,44.07,15ZM12,25.015H26a1,1,0,0,1,0,2H12a1,1,0,1,1,0-2Zm27,14H12a1,1,0,0,1,0-2H39a1,1,0,0,1,0,2Zm0-6H12a1,1,0,0,1,0-2H39a1,1,0,1,1,0,2Z" fill="#fff" />
                                    </g>
                                </svg>
                            </figure>
                            <h1>Sign up / Login</h1>
                            <form>
                                <input type="text" placeholder="User Name or Email" />
                                <input type="password" placeholder="Password" />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </section>
                    {/* <div className="contact-cols login-cols">
                        <div className="container">
                            <div className="contact-form-container login-form-container">
                                <div className="col">
                                    <div className="login-left-bg"></div>
                                </div>
                                <div className="col ml-auto">
                                    <form className="contact-form login-form">
                                        <div className="field-row">
                                            <label htmlFor="input1">Email</label>
                                            <input id="input1" type="email" placeholder="Enter your Email Address" />
                                        </div>
                                        <div className="field-row">
                                            <label htmlFor="input2">Password</label>
                                            <input id="input2" type="password" placeholder="Password" />
                                        </div>
                                        <div className="field-row submit-row">
                                            <input type="submit" value="Login" />
                                        </div>
                                    </form>
                                    <div className="already-account">
                                        <Link to="/forgot-password"> <strong> Forgot password? </strong> </Link>
                                        <p>Don't have an account? <Link to="/signup">Register here</Link></p>
                                    </div>
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

export default Login