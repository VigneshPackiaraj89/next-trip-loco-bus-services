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
            <div className="busroutes"></div>
        </div>)
}