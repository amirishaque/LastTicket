import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Index";
import About from "../../pages/about/Index";
import Login from "../../pages/login/Index";
import Signup from "../../pages/signup/Index";
import Contact from "../../pages/contact/Index";
import AccessDenied from "../../pages/accessDenied/AccessDenied";


const CreateRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/access-denied" element={<AccessDenied />} />
                <Route path="*" element={<><h1>404</h1></>} />
            </Routes>
        </>
    )
}

export default CreateRoutes