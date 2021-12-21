import * as Types from  '../actions/action-types'

export function busdirections(state = {directionData:[]}, action = {}) {
    switch(action.type) {
        case Types. STORE_DIRECTIONS:
            return {...state, directionData: action.data, directionApiError: false}

        case Types.STORE_ROUTES_INFO:
                return {...state, directionData: {}, directionApiError: true}
    
    default:    
        return state    
    }
}