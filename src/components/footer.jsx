import React from 'react'
import './footer.less'
import contact from './static-assets/contact-section.png'
import contactsmallview from './static-assets/contact-small view.png'

export const Footer = () => {
    return(
        <footer className="section" role="contentinfo">
          <div className="container">
            <div className="btn-container center lgview">
                <img src={contact} className="footer-img"></img>
            </div>
            <div className="btn-container center smallview">
                <img src={contactsmallview} className="footer-img"></img>
            </div>
          </div>
        </footer>
    )

}