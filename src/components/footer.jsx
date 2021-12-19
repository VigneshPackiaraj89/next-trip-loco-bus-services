import React from 'react'
import './footer.less'
import contact from './static-assets/contact-section.png'

export const Footer = () => {
    return(
        <footer className="section" role="contentinfo">
          <div className="container">
            <div class="btn-container center">
                <img src={contact} className="footer-img"></img>
            </div>
          </div>
        </footer>
    )

}