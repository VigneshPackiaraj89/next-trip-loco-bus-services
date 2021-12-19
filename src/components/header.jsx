import React from 'react'
import './header.less'
import MetroTransitLogo from '../../assets/MetroTransitLogo.svg'
import {NEXT_TRIP_ROUTE}  from  '../utils/constants'

export const Header = (props) => {
    return(
        <header id="header" className="nav-container">
            <nav className = {`navbar navbar-expand-xl navbar-light`}>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img alt="metro transit home" src={MetroTransitLogo} className="logo d-inline-block"/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li className="nav-item dropdown"> 
                        <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">Trip Tools</a>
                        <ul class="dropdown-menu">
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
                            <ul class="dropdown-menu">
                                <li><a href="#" className="dropdown-item">Fares</a></li>
                                <li><a href="#" className="dropdown-item">Go-To Card</a></li>
                                <li><a href="#" className="dropdown-item">Pass Programs</a></li>
                                <li><a href="#" className="dropdown-item">Store</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"> 
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">More</a>
                            <ul class="dropdown-menu">
                                <li><a href="#" className="dropdown-item">Carpool & Vanpool</a></li>
                                <li><a href="#" className="dropdown-item">Transit Link</a></li>
                                <li><a href="#" className="dropdown-item">Guaranteed Ride Home</a></li>
                                <li><a href="#" className="dropdown-item">Bicycle</a></li>
                                <li><a href="#" className="dropdown-item">News & Events</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"> 
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">Help</a>
                            <ul class="dropdown-menu">
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
                            <ul class="dropdown-menu">
                                <li><a href="#" className="dropdown-item">Sign In</a></li>
                                <li><a href="#" className="dropdown-item">Account</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>	
            </nav>
        </header>
    )

}