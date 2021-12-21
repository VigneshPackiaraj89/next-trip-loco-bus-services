import * as Types from  '../actions/action-types'

export function busstops(state = {stopsData:[]}, action = {}) {
    switch(action.type) {
        case Types. STORE_STOPS:
            return {...state, stopsData: action.data, storeShopError: false}
        case Types. STOPS_API_ERROR:
                return {...state, stopsData: [], storeShopError: true}
    default:    
        return state    
    }
}