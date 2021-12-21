import * as Types from  '../actions/action-types'

export function busroutes(state = {data:[]}, action = {}) {
    switch(action.type) {
        case Types. STORE_ROUTES_INFO:
            return {...state, data: action.data, storeRouteApiError: false}
        case Types. ROUTE_API_ERROR:
            return {...state, data: action.data, storeRouteApiError: true}
    default:    
        return state    
    }
}