import React from 'react'
import './error-handling.less'
import {useSelector} from 'react-redux'
import { PropTypes } from 'prop-types';

export const ErrorHandling = (props) => {
    const {detailsError} = useSelector(state => state.busdetails)
    return(
        detailsError ? 
         <div className="displayError" id="displayError"> 
                {props.userInputStopNo} is not a valid stop number.
        </div>: null
    )
}
ErrorHandling.propTypes = {
    userInputStopNo: PropTypes.string
};