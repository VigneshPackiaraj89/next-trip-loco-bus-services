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
    let store
    if (module.hot) {
        store = global.__REDUX_STORE = global.__REDUX_STORE || configureStore()
        module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers').default))
        module.hot.accept()
    }
    else {
        store = configureStore()
    }
    return store
}
