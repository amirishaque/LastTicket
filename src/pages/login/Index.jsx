import "./login.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import { Link } from "react-router-dom";
import SmallBanner from "../../components/core/small-banner/Index";


const Login = () => {
    return(
        <>
            <div className="login-page">
                <Header />
                <main id="main">
                    <SmallBanner bannerHeading="Login" bannerText="Here is the last chance to be the member of world’s leading ticket marketplace for live events around the globe." />
                    <div className="contact-cols login-cols">
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
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Login