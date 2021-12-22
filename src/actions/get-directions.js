import { API_DOMAIN } from "../utils/constants"
import * as Types from './action-types'
import {baseFetch} from '../utils/base-fetch'

export function getDirections(route) {
    const url =   `${API_DOMAIN}/Directions/${route}`
    return(dispatch) => {
        try{
            baseFetch(url).then((data)=> {
                dispatch({type: Types.STORE_DIRECTIONS, data})
            })
        }catch(e) {
            dispatch({type: Types.DIRECTIONS_API_ERROR})
        }
    }
}
    
    
    