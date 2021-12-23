import React from 'react'
import './next-trip-image.less'
import { PropTypes } from 'prop-types';

export const NextTripImage = (props) => {
    return(
    <div className= {props.page === 'initial' ? "primary passImage nextrip-initial" : "primary passImage nextrip-bg"}>
        <div className="container">
            <div className="page-title">
                <h1>{props.page === 'initial' ? 'Welcome Page' : 'NexTrip'}</h1>
            </div>
        </div>
    </div>)
}

NextTripImage.propTypes = {
    page: PropTypes.string
};