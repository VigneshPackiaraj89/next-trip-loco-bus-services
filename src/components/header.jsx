import React from 'react'
import './header.less'
import MetroTransitLogo from '../../assets/MetroTransitLogo.svg'

export const Header = (props) => {
    return(
        <header id="header" className="nav-container">
            <nav className = {`navbar navbar-expand-xl navbar-light`}>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img alt="metro transit home" src={MetroTransitLogo} className="logo d-inline-block"/>
                    </a>
                    <ul className="nav navbar-nav mx-auto">
                        <li className="nav-item dropdown"> <a href="#" className="nav-link dropdown-toggle">Trip Tools</a></li>
                        <li className="nav-item dropdown"> <a href="#" className="nav-link dropdown-toggle">Schedule & Maps</a></li>
                        <li className="nav-item dropdown"> <a href="#" className="nav-link dropdown-toggle">Fares</a></li>
                        <li className="nav-item dropdown"> <a href="#" className="nav-link dropdown-toggle">More</a></li>
                        <li className="nav-item dropdown"> <a href="#" className="nav-link dropdown-toggle">Help</a></li>
                        </ul>
                        <ul className="nav navbar-nav utilities mx-auto">
                        <li className="nav-item dropdown"> <a href="#" className="nav-link go-to-icon"></a></li>
                        <li className="nav-item dropdown"> <a href="#" className="nav-link store-icon"></a></li>
                        <li className="nav-item dropdown"> <a href="#" className="nav-link search-icon"></a></li>
                    </ul>
                </div>	
            </nav>
        </header>
    )

}