import { API_DOMAIN } from "../utils/constants"
import * as Types from './action-types'

export function getStationDetails(stop, direction, route) {
    const url = `${API_DOMAIN}/${route}/${direction}/${stop}`
    return(dispatch) => {
        try{
            fetch(url, {headers: { Accept: 'application/json'}}).then((res)=> {
                return res.json()
            }).then((data)=> {
                dispatch({type: Types.STORE_BUS_DETAILS, data})
                window.history.pushState('', '', `/nextrip/${route}/${direction}/${stop}`);
            })
        }catch(e) {
            dispatch({type: Types.BUS_DETAILS_API_ERROR})
        }
    }
}
    
    
    