import {combineReducers} from 'redux'
import {busroutes} from './bus-routes'
import {busdirections} from './bus-directions'
import {busstops} from './bus-stops'
import {busdetails} from './bus-details'

export default combineReducers({
    busroutes,
    busdirections,
    busstops,
    busdetails
})