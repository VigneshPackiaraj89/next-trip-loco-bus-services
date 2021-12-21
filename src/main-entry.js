import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './main-entry.less'
import makeStore from './store' 
import {Mainlayout} from './components/main-layout'
import {Footer} from './components/footer'

const store = makeStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter baseName="/">
                <div className={`nexttrip`}>
                    <Switch>
                        <Route path='*' component={Mainlayout}/>    
                    </Switch>
                    <Footer />
                </div>
        </BrowserRouter>
    </Provider>, document.getElementById('next-trip-wrapper'))