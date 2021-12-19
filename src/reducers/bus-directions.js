import * as Types from  '../actions/action-types'

export function busdirections(state = {}, action = {}) {
    switch(action.type) {
        case Types. STORE_DIRECTIONS:
            return {...state, directionData: action.data}
    default:    
        return state    
    }
}