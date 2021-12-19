import { API_DOMAIN } from "../utils/constants"
import * as Types from './action-types'

export function getStationDetails(stop, direction, route) {
    console.log(stop, direction, route)
    const url = `${API_DOMAIN}/${route}/${direction}/${stop}`
    return(dispatch) => {
        try{
            fetch(url, {headers: { Accept: 'application/json'}}).then((res)=> {
                return res.json()
            }).then((data)=> {
                dispatch({type: Types.STORE_BUS_DETAILS, data})
            })
        }catch(e) {
            dispatch({type: Types.BUS_DETAILS_API_ERROR})
        }
    }
}
    
    
    