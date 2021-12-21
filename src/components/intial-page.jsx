import React from 'react'
import './initial-page.less'
import {Header} from './header'
import {NextTripImage} from './next-trip-image'

export const InitialPage = () => {
    return(
        <div className={`initial-page-container`}>
            <Header />
            <NextTripImage page="initial"/>
            <div className="busroutes"></div>
        </div>)
}