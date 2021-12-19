import { API_DOMAIN } from "../utils/constants"
import * as Types from './action-types'

export function getStopsNumber(stpNumber) {
    const url = `${API_DOMAIN}/${stpNumber}`
    console.log(url)
    return(dispatch) => {
        try{
            fetch(url, {headers: { Accept: 'application/json'}}).then((res)=> {
                return res.json()
            }).then((data)=> {
                if(data.stops)
                 dispatch({type: Types.STORE_BUS_DETAILS, data})
                else {
                 dispatch({type: Types.BUS_DETAILS_API_ERROR}) 
                }
            })
        }catch(e) {
            dispatch({type: Types.BUS_DETAILS_API_ERROR})
        }
    }
}


    