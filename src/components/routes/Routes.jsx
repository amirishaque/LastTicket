import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login"
import About from "../../pages/about/About"
import RestPassword from "../../pages/resetPassword/ResetPassword"
import Signup from "../../pages/signup/Signup";
import SuccessEmail from "../../pages/signup/verification-email/SuccessEmail";
import AccessDenied from "../../pages/accessDenied/AccessDenied";
import ForgetPassword from "../../pages/forgetPassword/ForgotPassword";


const CreateRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/reset-password" element={<RestPassword />} />
                <Route path="/success-email" element={<SuccessEmail />} />

                <Route path="/access-denied" element={<AccessDenied />} />
                <Route path="*" element={<><h1>404</h1></>} />
            </Routes>
        </>
    )
}

export default CreateRoutes