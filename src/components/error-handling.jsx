import React from 'react'
import './error-handling.less'
import {useSelector} from 'react-redux'
import { PropTypes } from 'prop-types';

export const ErrorHandling = (props) => {
    const {detailsError} = useSelector(state => state.busdetails)
    const {directionApiError} = useSelector(state => state.busdirections)
    const {storeShopError} = useSelector(state => state.busstops)
    const {storeRouteApiError} = useSelector(state => state.busroutes)

    return (
        detailsError ?
            <div className="displayError" id="displayError">
                {props.userInputStopNo} is not a valid stop number.
            </div>
            :
            (directionApiError || storeShopError || storeRouteApiError) ?
                <div className="displayError" id="displayError">Please try again</div>
                : null
    )
}
ErrorHandling.propTypes = {
    userInputStopNo: PropTypes.string
};