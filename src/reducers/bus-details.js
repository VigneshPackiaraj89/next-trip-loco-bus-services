import * as Types from  '../actions/action-types'

export function busdetails(state = {busDetailsData:{}, detailsError: false}, action = {}) {
    switch(action.type) {
        case Types. STORE_BUS_DETAILS:
            return {...state, busDetailsData: action.data, detailsError: false}

        case Types.BUS_DETAILS_API_ERROR:
            return {...state, busDetailsData: {}, detailsError: true}

        case Types.RESET_STOPS_INFO: 
            return {...state, busDetailsData: {}, detailsError: false}
        
    default:    
        return state    
    }
}