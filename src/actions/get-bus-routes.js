import { API_DOMAIN } from "../utils/constants"
import * as Types from './action-types'
import {baseFetch} from '../utils/base-fetch'

export function getRoutes() {
    const url =  `${API_DOMAIN}/routes`
    return(dispatch) => {
        try{
            return baseFetch(url).then((data)=> {
                if(data.status !== 400){
                    dispatch({type: Types.STORE_ROUTES_INFO, data})
                }
            }).catch(() => {
                dispatch({type: Types.ROUTE_API_ERROR})
            })
        }catch(e) {
            dispatch({type: Types.ROUTE_API_ERROR})
        }
    }
}
    
    
    