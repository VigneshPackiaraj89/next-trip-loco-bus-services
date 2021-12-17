import React from 'react'
import './main-component.less'
import {Header} from './header'
import {NextTrip} from './next-trip-module'

export const MainComponent = (props) => {
    return(
    <div className={`main-container`}>
        <Header/>
        <div className="primary passImage nextrip-bg">
            <div class="container">
                <div class="page-title">
                    <h1>NexTrip</h1>
                </div>
            </div>
        </div>
        <NextTrip />
    </div>)
}