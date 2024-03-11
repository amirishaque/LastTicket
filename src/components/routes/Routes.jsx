import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Index";
import About from "../../pages/about/Index";
import Login from "../../pages/login/Index";
import Signup from "../../pages/signup/Index";
import Contact from "../../pages/contact/Index";
import RequestEvent from "../../pages/requestEvent/Index";
import SellTickets from "../../pages/sellTickets/Index";
import TicketDetails from "../../pages/ticketDetails/Index";
import TicketView from "../../pages/ticketView/Index";
import Checkout from "../../pages/checkout/Index";
import AccessDenied from "../../pages/accessDenied/AccessDenied";
import OrderSummary from "../../pages/orderSummary/Index";


const CreateRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/request-event" element={<RequestEvent />} />
                <Route path="/sell-tickets" element={<SellTickets />} />
                <Route path="/sell-tickets/:ticketId/:ticketName" element={<TicketDetails />} />
                <Route path="/ticket/:ticketId/view" element={<TicketView />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-summary" element={<OrderSummary />} />

                <Route path="/access-denied" element={<AccessDenied />} />
                <Route path="*" element={<><h1>404</h1></>} />
            </Routes>
        </>
    )
}

export default CreateRoutes