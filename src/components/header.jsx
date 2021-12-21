import React from 'react'
import './header.less'
import MetroTransitLogo from '../../assets/MetroTransitLogo.svg'
import { NEXT_TRIP_ROUTE } from '../utils/constants'

export const Header = () => {
    return (
        <header id="header" className="nav-container">
            <nav className={`navbar navbar-expand-xl navbar-light`}>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img alt="metro transit home" src={MetroTransitLogo} className="logo d-inline-block" />
                    </a>
                    <button className="navbar-toggler menubar" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav">
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">Trip Tools</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="dropdown-item">Trip Planner</a></li>
                                    <li><a href={NEXT_TRIP_ROUTE} className="dropdown-item">NexTrip</a></li>
                                    <li><a href="#" className="dropdown-item">Alerts</a></li>
                                    <li><a href="#" className="dropdown-item">Trip Planner</a></li>
                                    <li><a href="#" className="dropdown-item">Find a Park & Ride</a></li>
                                    <li><a href="#" className="dropdown-item">Find a Stop or Station</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle schedule">Schedule & Maps</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">Fares</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="dropdown-item">Fares</a></li>
                                    <li><a href="#" className="dropdown-item">Go-To Card</a></li>
                                    <li><a href="#" className="dropdown-item">Pass Programs</a></li>
                                    <li><a href="#" className="dropdown-item">Store</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">More</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="dropdown-item">Carpool & Vanpool</a></li>
                                    <li><a href="#" className="dropdown-item">Transit Link</a></li>
                                    <li><a href="#" className="dropdown-item">Guaranteed Ride Home</a></li>
                                    <li><a href="#" className="dropdown-item">Bicycle</a></li>
                                    <li><a href="#" className="dropdown-item">News & Events</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">Help</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="dropdown-item">How to Ride</a></li>
                                    <li><a href="#" className="dropdown-item">Contact Us</a></li>
                                    <li><a href="#" className="dropdown-item">Lost & Found</a></li>
                                    <li><a href="#" className="dropdown-item">Accessibility</a></li>
                                    <li><a href="#" className="dropdown-item">Languages</a></li>
                                    <li><a href="#" className="dropdown-item">Transit Police</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"> <a href="#" className="nav-link dropdown-toggle schedule go-to-icon"></a></li>
                            <li className="nav-item"> <a href="#" className="nav-link dropdown-toggle schedule store-icon"></a></li>
                            <li className="nav-item"> <a href="#" className="nav-link dropdown-toggle schedule search-icon"></a></li>
                            <li className="nav-item dropdown"> <a href="#" role="button" className="nav-link dropdown-toggle schedule avtar-icon" data-toggle="dropdown"></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="dropdown-item">Sign In</a></li>
                                    <li><a href="#" className="dropdown-item">Account</a></li>
                                </ul>
                            </li>
                            <div className="show-only-for-small-view">
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">About Metro Transit</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" className="dropdown-item">Transit Improvements</a></li>
                                        <li><a href="#" className="dropdown-item">Facilities</a></li>
                                        <li><a href="#" className="dropdown-item">Riders Almanac</a></li>
                                        <li><a href="#" className="dropdown-item">Transit Oriented Development</a></li>
                                        <li><a href="#" className="dropdown-item">Use of Transit Property</a></li>
                                        <li><a href="#" className="dropdown-item">Events & Partnerships</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">Media Relations</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" className="dropdown-item">Media Resources</a></li>
                                        <li><a href="#" className="dropdown-item">Contact Us</a></li>
                                        <li><a href="#" className="dropdown-item">Lost & Found</a></li>
                                        <li><a href="#" className="dropdown-item">Accessibility</a></li>
                                        <li><a href="#" className="dropdown-item">Languages</a></li>
                                        <li><a href="#" className="dropdown-item">Transit Police</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">Careers</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" className="dropdown-item">Available Job Opportunities</a></li>
                                        <li><a href="#" className="dropdown-item">Become a Bus Driver</a></li>
                                        <li><a href="#" className="dropdown-item">Join the Transit Police</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">Policies</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" className="dropdown-item">Social Media Policy</a></li>
                                        <li><a href="#" className="dropdown-item">Privacy Policy</a></li>
                                        <li><a href="#" className="dropdown-item">Code of Conduct</a></li>
                                        <li><a href="#" className="dropdown-item">Title VI: Commitment to Fairness</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">Mission & Impact</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" className="dropdown-item">Mission & Funding</a></li>
                                        <li><a href="#" className="dropdown-item">Equity & Inclusion</a></li>
                                        <li><a href="#" className="dropdown-item">Public Art</a></li>
                                        <li><a href="#" className="dropdown-item">Outreach</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">Mission & Impact</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" className="dropdown-item">Mission & Funding</a></li>
                                        <li><a href="#" className="dropdown-item">Equity & Inclusion</a></li>
                                        <li><a href="#" className="dropdown-item">Public Art</a></li>
                                        <li><a href="#" className="dropdown-item">Outreach</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">Resources</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" className="dropdown-item">Try the Metro Transit App</a></li>
                                        <li><a href="#" className="dropdown-item">Advertise with Us</a></li>
                                        <li><a href="#" className="dropdown-item">API Resources for Developers</a></li>        
                                    </ul>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}