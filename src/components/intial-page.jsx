import React from 'react'
import './initial-page.less'
import {NEXT_TRIP_ROUTE} from '../utils/constants'
import {Header} from './header'
import {NextTripImage} from './next-trip-image'

export const InitialPage = (props) => {
    return(
        <div className={`initial-page-container`}>
            <Header />
            <NextTripImage page="initial"/>
            <div className="busroutes">
                <span >Bus Routes: </span>
                <button type="button" className="btn btn-primary btn-lg" onClick={()=>props.history.push(NEXT_TRIP_ROUTE)}>Next Trip</button>
            </div>
        </div>)
}