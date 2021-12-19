import React from 'react'
import './footer.less'

export const Footer = (props) => {
    return(
        <footer className="section" role="contentinfo">
          <div className="container">
            <div class="btn-container center">
                <a class="btn btn-secondary-ghost has-icon-right mr-0" href="/contact-us">Contact us</a>
                < p class="d-lg-none text-center mb-3"><a class="h2" href="tel:612-373-3333">612-373-3333</a></p>
            </div>
          </div>
        </footer>
    )

}