import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default function makeStore() {
    const getInitialState = () => {
        const state = reducers(undefined, {})
        return {
            ...state,
            stop: {}
        }
    }
    const configureStore = () => (
        createStore(
            reducers,
            getInitialState(),
            compose(
                applyMiddleware(thunk),
                window.devToolsExtension ? window.devToolsExtension() : f => f
            )
        )
    )
    let store = configureStore()
    return store
}
