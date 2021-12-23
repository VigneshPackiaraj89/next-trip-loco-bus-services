import React from 'react'
import './header.less'
import MetroTransitLogo from '../../assets/MetroTransitLogo.svg'
import { NEXT_TRIP_ROUTE } from '../utils/constants'

export const Header = () => {

    const generateUL = (heading, list) => {
        return(
            <React.Fragment>
                {heading && <a href="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown">{heading}</a>}
                <ul className="dropdown-menu">
                    {list.map((item) => {
                        if(item === 'NexTrip') {
                            return <li><a href={NEXT_TRIP_ROUTE} className="dropdown-item">{item}</a></li>
                        }else {
                            return <li><a href="#" className="dropdown-item">{item}</a></li>
                        }
                    })}
                </ul>
            </React.Fragment>
        )
    }    

    return (
        <header id="header" className="nav-container">
            <nav className={`navbar navbar-expand-xl navbar-light`}>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img alt="metro transit home" src={MetroTransitLogo} className="logo d-inline-block" />
                    </a>
                    <button className="navbar-toggler menubar dropdown-toggle" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav">
                            <li className="nav-item dropdown">
                                {generateUL('Trip Tools', ['Trip Planner', 'NexTrip', 'Alerts', 'Trip Planner', 'Find a Park & Ride', 'Find a Stop or Station'])}
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle schedule">Schedule & Maps</a>
                            </li>
                            <li className="nav-item dropdown">
                                {generateUL('Fares', ['Fares', 'Go-To Card', 'Pass Programs', 'Store'])}
                            </li>
                            <li className="nav-item dropdown">
                                {generateUL('More', ['Carpool & Vanpool', 'Transit Link', 'Guaranteed Ride Home', 'Bicycle', 'News & Events'])}
                            </li>
                            <li className="nav-item dropdown">
                                {generateUL('Help', ['How to Ride', 'Contact Us', 'Lost & Found', 'Accessibility', 'Languages', 'Transit Police'])}
                            </li>
                            <li className="nav-item"> <a href="#" className="nav-link dropdown-toggle schedule go-to-icon"></a></li>
                            <li className="nav-item"> <a href="#" className="nav-link dropdown-toggle schedule store-icon"></a></li>
                            <li className="nav-item"> <a href="#" className="nav-link dropdown-toggle schedule search-icon"></a></li>
                            <li className="nav-item dropdown"> <a href="#" role="button" className="nav-link dropdown-toggle schedule avtar-icon" data-toggle="dropdown"></a>
                                {generateUL('', ['Sign', 'Account'])}
                            </li>
                            <div className="show-only-for-small-view">
                                <li className="nav-item dropdown">
                                    {generateUL('About Metro Transit', ['About Metro Transit', 'Transit Improvements', 'Facilities', 'Riders Almanac', 
                                            'Transit Oriented Development', 'Use of Transit Property', 'Events & Partnerships'])}
                                </li>
                                <li className="nav-item dropdown">
                                    {generateUL('Media Relations', ['Media Resources', 'Contact Us', 'Lost & Found', 'Accessibility', 'Languages', 'Transit Police'])}
                                </li>
                                <li className="nav-item dropdown">
                                    {generateUL('Careers', ['Available Job Opportunities', 'Become a Bus Driver', 'Join the Transit Police', 'Accessibility'])}
                                </li>
                                <li className="nav-item dropdown">
                                    {generateUL('Policies', ['Social Media Policy', 'Privacy Policy', 'Code of Conduct', 'Title VI: Commitment to Fairness'])}
                                </li>
                                <li className="nav-item dropdown">
                                    {generateUL('Mission & Impact', ['Mission & Funding', 'Equity & Inclusion', 'Public Art', 'Outreach'])}
                                </li>
                                <li className="nav-item dropdown">
                                    {generateUL('Resources', ['Try the Metro Transit App', 'Advertise with Us', 'API Resources for Developers'])}
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}