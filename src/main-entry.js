import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './main-entry.less'
import makeStore from './store' 
import {NextTripMainComponent} from './components/next-trip-main-component'
import {InitialPage} from './components/intial-page'
import {Footer} from './components/footer'

const store = makeStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter baseName="/">
                <div className={`nexttrip`}>
                    <Switch>
                        <Route exact path='/nextrip*' component={NextTripMainComponent}/>
                        <Route path='*' component={InitialPage}/>    
                    </Switch>
                    <Footer />
                </div>
        </BrowserRouter>
    </Provider>, document.getElementById('next-trip-wrapper'))