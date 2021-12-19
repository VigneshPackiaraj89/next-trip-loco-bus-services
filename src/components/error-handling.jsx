import React from 'react'
import './error-handling.less'
import {useSelector} from 'react-redux'

export const ErrorHandling = () => {
    const {detailsError} = useSelector(state => state.busdetails)
    return(
        detailsError ? 
         <div className="displayError"> 
                Please try again with valid details
        </div>: null
    )

}