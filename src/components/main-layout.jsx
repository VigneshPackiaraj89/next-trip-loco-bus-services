import {Route, Switch} from 'react-router-dom'
import React from 'react'
import {NextTripMainComponent} from './next-trip-main-component'
import {InitialPage} from './intial-page'

export const Mainlayout = () => {
    return (
        <Switch>
            <Route path='/nextrip*' render={ () => { return <NextTripMainComponent />}}/>
            <Route path='*' render={() => {return <InitialPage />}}/>    
        </Switch>
    )
}