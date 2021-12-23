import { API_DOMAIN } from "../utils/constants"
import * as Types from './action-types'
import {baseFetch} from '../utils/base-fetch'

export function getStopsNumber(stpNumber) {
    const url = `${API_DOMAIN}/${stpNumber}`
    return(dispatch) => {
        try{
            return baseFetch(url).then((data)=> {
                if(data.stops){ 
                    if(data.status !== 400){
                        dispatch({type: Types.STORE_BUS_DETAILS, data})
                    }
                    window.history.pushState('', '', `/nextrip/${stpNumber}`)
                }
                else {
                    dispatch({type: Types.BUS_DETAILS_API_ERROR}) 
                }
            }).catch(() => {
                dispatch({type: Types.BUS_DETAILS_API_ERROR})
            })
        }catch(e) {
            dispatch({type: Types.BUS_DETAILS_API_ERROR})
        }
    }
}


    