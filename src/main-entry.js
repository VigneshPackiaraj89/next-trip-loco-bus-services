import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './main-entry.less'
import makeStore from './store' 
import {MainComponent} from './components/main-component'

const store = makeStore()
const cb = ''

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter baseName="/nexttrip/busservices">
                <div className={`nexttrip`}>
                    <Switch>
                        <Route exact path='*' component={MainComponent}/>
                    </Switch>
                </div>
        </BrowserRouter>
    </Provider>, document.getElementById('next-trip-wrapper')
)