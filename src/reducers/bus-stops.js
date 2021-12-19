import * as Types from  '../actions/action-types'

export function busstops(state = {}, action = {}) {
    switch(action.type) {
        case Types. STORE_STOPS:
            return {...state, stopsData: action.data}
    default:    
        return state    
    }
}