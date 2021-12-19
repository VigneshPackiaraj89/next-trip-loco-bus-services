import {combineReducers} from 'redux'
import {stop} from './stops'
import {busroutes} from './bus-routes'
import {busdirections} from './bus-directions'
import {busstops} from './bus-stops'

export default combineReducers({
    stop,
    busroutes,
    busdirections,
    busstops
})