import "./sellTickets.css";
import Header from "../../components/core/header/Header";
import Footer from "../../components/core/footer/Footer";
import SmallBanner from "../../components/core/small-banner/Index";
import { Link } from "react-router-dom";
import Slider from "../../components/slider/slider-banner";


const SellTickets = () => {
	return (
		<>
			<div className="about-area">
				<Header />
				<main id="main">
					<Slider />
					<SmallBanner bannerHeading="Select Your Event" bannerText="Last chance ticket helps you to sell the tickets quickly by making your listing available to millions of customers around the world." />
					<div className="event-box-wrapper text-holder">
						<div className="boxes-holder">
							<h2>SELL YOUR TICKETS ON <span>LAST CHANCE TICKET</span></h2>
							<div className="boxes add">
								<div className="box">
									<div className="ico-holder">
										<svg width="60px" height="60px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<rect x="0" fill="none" width="60" height="60" />
											<g>
												<path d="M20 6.38L18.99 9.2v-.01c-.52-.19-1.03-.16-1.53.08s-.85.62-1.04 1.14-.16 1.03.07 1.53c.24.5.62.84 1.15 1.03v.01l-1.01 2.82-15.06-5.38.99-2.79c.52.19 1.03.16 1.53-.08.5-.23.84-.61 1.03-1.13s.16-1.03-.08-1.53c-.23-.49-.61-.83-1.13-1.02L4.93 1zm-4.97 5.69l1.37-3.76c.12-.31.1-.65-.04-.95s-.39-.53-.7-.65L8.14 3.98c-.64-.23-1.37.12-1.6.74L5.17 8.48c-.24.65.1 1.37.74 1.6l7.52 2.74c.14.05.28.08.43.08.52 0 1-.33 1.17-.83zM7.97 4.45l7.51 2.73c.19.07.34.21.43.39.08.18.09.38.02.57l-1.37 3.76c-.13.38-.58.59-.96.45L6.09 9.61c-.39-.14-.59-.57-.45-.96l1.37-3.76c.1-.29.39-.49.7-.49.09 0 .17.02.26.05zm6.82 12.14c.35.27.75.41 1.2.41H16v3H0v-2.96c.55 0 1.03-.2 1.41-.59.39-.38.59-.86.59-1.41s-.2-1.02-.59-1.41-.86-.59-1.41-.59V10h1.05l-.28.8 2.87 1.02c-.51.16-.89.62-.89 1.18v4c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-1.75l.83.3c.12.43.36.78.71 1.04zM3.25 17v-4c0-.41.34-.75.75-.75h.83l7.92 2.83V17c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75z" />
											</g>
										</svg>
									</div>
									<strong>Sports Tickets</strong>
									<ul className="box-list">
										<li><Link to="/sell-tickets/1/Formula 1">Formula 1</Link></li>
										<li><Link to="/sell-tickets/1/Sports">Sports</Link></li>
										<li><Link to="/sell-tickets/1/UFC">UFC</Link></li>
										<li><Link to="/sell-tickets/1/PSL">PSL</Link></li>
									</ul>
								</div>
								<div className="box">
									<div className="ico-holder">
										<svg width="60px" height="60px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<rect x="0" fill="none" width="60" height="60" />
											<g>
												<path d="M20 6.38L18.99 9.2v-.01c-.52-.19-1.03-.16-1.53.08s-.85.62-1.04 1.14-.16 1.03.07 1.53c.24.5.62.84 1.15 1.03v.01l-1.01 2.82-15.06-5.38.99-2.79c.52.19 1.03.16 1.53-.08.5-.23.84-.61 1.03-1.13s.16-1.03-.08-1.53c-.23-.49-.61-.83-1.13-1.02L4.93 1zm-4.97 5.69l1.37-3.76c.12-.31.1-.65-.04-.95s-.39-.53-.7-.65L8.14 3.98c-.64-.23-1.37.12-1.6.74L5.17 8.48c-.24.65.1 1.37.74 1.6l7.52 2.74c.14.05.28.08.43.08.52 0 1-.33 1.17-.83zM7.97 4.45l7.51 2.73c.19.07.34.21.43.39.08.18.09.38.02.57l-1.37 3.76c-.13.38-.58.59-.96.45L6.09 9.61c-.39-.14-.59-.57-.45-.96l1.37-3.76c.1-.29.39-.49.7-.49.09 0 .17.02.26.05zm6.82 12.14c.35.27.75.41 1.2.41H16v3H0v-2.96c.55 0 1.03-.2 1.41-.59.39-.38.59-.86.59-1.41s-.2-1.02-.59-1.41-.86-.59-1.41-.59V10h1.05l-.28.8 2.87 1.02c-.51.16-.89.62-.89 1.18v4c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-1.75l.83.3c.12.43.36.78.71 1.04zM3.25 17v-4c0-.41.34-.75.75-.75h.83l7.92 2.83V17c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75z" />
											</g>
										</svg>
									</div>
									<strong>Concerts Tickets</strong>
									<ul className="box-list">
										<li><Link to="/sell-tickets/1/Concert">Concert</Link></li>
									</ul>
								</div>
								<div className="box">
									<div className="ico-holder">
										<svg width="60px" height="60px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<rect x="0" fill="none" width="60" height="60" />
											<g>
												<path d="M20 6.38L18.99 9.2v-.01c-.52-.19-1.03-.16-1.53.08s-.85.62-1.04 1.14-.16 1.03.07 1.53c.24.5.62.84 1.15 1.03v.01l-1.01 2.82-15.06-5.38.99-2.79c.52.19 1.03.16 1.53-.08.5-.23.84-.61 1.03-1.13s.16-1.03-.08-1.53c-.23-.49-.61-.83-1.13-1.02L4.93 1zm-4.97 5.69l1.37-3.76c.12-.31.1-.65-.04-.95s-.39-.53-.7-.65L8.14 3.98c-.64-.23-1.37.12-1.6.74L5.17 8.48c-.24.65.1 1.37.74 1.6l7.52 2.74c.14.05.28.08.43.08.52 0 1-.33 1.17-.83zM7.97 4.45l7.51 2.73c.19.07.34.21.43.39.08.18.09.38.02.57l-1.37 3.76c-.13.38-.58.59-.96.45L6.09 9.61c-.39-.14-.59-.57-.45-.96l1.37-3.76c.1-.29.39-.49.7-.49.09 0 .17.02.26.05zm6.82 12.14c.35.27.75.41 1.2.41H16v3H0v-2.96c.55 0 1.03-.2 1.41-.59.39-.38.59-.86.59-1.41s-.2-1.02-.59-1.41-.86-.59-1.41-.59V10h1.05l-.28.8 2.87 1.02c-.51.16-.89.62-.89 1.18v4c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-1.75l.83.3c.12.43.36.78.71 1.04zM3.25 17v-4c0-.41.34-.75.75-.75h.83l7.92 2.83V17c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75z" />
											</g>
										</svg>
									</div>
									<strong>Theatre Tickets</strong>
									<ul className="box-list">
										<li><Link to="/sell-tickets/1/Theatre">Theatre</Link></li>
									</ul>
								</div>
								<div className="box">
									<div className="ico-holder">
										<svg width="60px" height="60px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<rect x="0" fill="none" width="60" height="60" />
											<g>
												<path d="M20 6.38L18.99 9.2v-.01c-.52-.19-1.03-.16-1.53.08s-.85.62-1.04 1.14-.16 1.03.07 1.53c.24.5.62.84 1.15 1.03v.01l-1.01 2.82-15.06-5.38.99-2.79c.52.19 1.03.16 1.53-.08.5-.23.84-.61 1.03-1.13s.16-1.03-.08-1.53c-.23-.49-.61-.83-1.13-1.02L4.93 1zm-4.97 5.69l1.37-3.76c.12-.31.1-.65-.04-.95s-.39-.53-.7-.65L8.14 3.98c-.64-.23-1.37.12-1.6.74L5.17 8.48c-.24.65.1 1.37.74 1.6l7.52 2.74c.14.05.28.08.43.08.52 0 1-.33 1.17-.83zM7.97 4.45l7.51 2.73c.19.07.34.21.43.39.08.18.09.38.02.57l-1.37 3.76c-.13.38-.58.59-.96.45L6.09 9.61c-.39-.14-.59-.57-.45-.96l1.37-3.76c.1-.29.39-.49.7-.49.09 0 .17.02.26.05zm6.82 12.14c.35.27.75.41 1.2.41H16v3H0v-2.96c.55 0 1.03-.2 1.41-.59.39-.38.59-.86.59-1.41s-.2-1.02-.59-1.41-.86-.59-1.41-.59V10h1.05l-.28.8 2.87 1.02c-.51.16-.89.62-.89 1.18v4c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-1.75l.83.3c.12.43.36.78.71 1.04zM3.25 17v-4c0-.41.34-.75.75-.75h.83l7.92 2.83V17c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75z" />
											</g>
										</svg>
									</div>
									<strong>Festival Tickets</strong>
									<ul className="box-list">
										<li><Link to="/sell-tickets/1/Coming Soon">Coming Soon...</Link></li>
									</ul>
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

export default SellTickets