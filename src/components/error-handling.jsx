import React from 'react'
import './error-handling.less'
import {useSelector} from 'react-redux'

export const ErrorHandling = (props) => {
    const {detailsError} = useSelector(state => state.busdetails)
    return(
        detailsError ? 
         <div className="displayError"> 
                {props.userInputStopNo} is not a valid stop number.
        </div>: null
    )

}