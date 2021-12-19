import { API_DOMAIN } from "../utils/constants"
import * as Types from './action-types'

export function getDirections(route) {
    const url =   `${API_DOMAIN}/Directions/${route}`
    return(dispatch) => {
        try{
            fetch(url, {headers: { Accept: 'application/json'}}).then((res)=> {
                return res.json()
            }).then((data)=> {
                dispatch({type: Types.STORE_DIRECTIONS, data})
            })
        }catch(e) {
            dispatch({type: Types.DIRECTIONS_API_ERROR})
        }
    }
}
    
    
    