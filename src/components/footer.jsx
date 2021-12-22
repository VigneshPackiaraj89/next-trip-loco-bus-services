import React from 'react'
import './footer.less'
import contact from './static-assets/contact-section.png'

export const Footer = () => {
    return(
        <footer className="section" role="contentinfo">
          <div className="container">
            <div className="btn-container center lgview">
                  <div className="btn-contact"><a className="btn btn-secondary-ghost has-icon-right mr-0" href="/contact-us">Contact us</a></div>
                  <img src={contact} className="footer-img"></img>
            </div>
            <div className="btn-container center smallview">
              <div className="btn-contact"><a className="btn btn-secondary-ghost has-icon-right mr-0" href="/contact-us">Contact us</a></div>
              <p className="text-center mb-3"><a className="h2" href="tel:612-373-3333">612-373-3333</a></p>
            </div>
          </div>
        </footer>
    )

}