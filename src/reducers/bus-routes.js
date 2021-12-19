import * as Types from  '../actions/action-types'

export function busroutes(state = {}, action = {}) {
    switch(action.type) {
        case Types. STORE_ROUTES_INFO:
            return {...state, data: action.data}
    default:    
        return state    
    }
}