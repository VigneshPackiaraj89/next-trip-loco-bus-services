import { API_DOMAIN } from "../utils/constants"
import * as Types from './action-types'
import {baseFetch} from '../utils/base-fetch'

export function getStops(direction, route) {
    const url =   `${API_DOMAIN}/Stops/${route}/${direction}`
    return(dispatch) => {
        try{
            return baseFetch(url).then((data)=> {
                if(data.status !== 400){
                    dispatch({type: Types.STORE_STOPS, data})
                }
            }).catch(() => {
                dispatch({type: Types.STOPS_API_ERROR})
            })
        }catch(e) {
            dispatch({type: Types.STOPS_API_ERROR})
        }
    }
}
    
    
    