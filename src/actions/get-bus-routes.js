import { API_DOMAIN } from "../utils/constants"
import * as Types from './action-types'

export function getRoutes() {
    const url =   `${API_DOMAIN}/Routes`
    return(dispatch) => {
        try{
            fetch(url, {headers: { Accept: 'application/json'}}).then((res)=> {
                return res.json()
            }).then((data)=> {
                dispatch({type: Types.STORE_ROUTES_INFO, data})
            })
        }catch(e) {
            dispatch({type: Types.ROUTE_API_ERROR})
        }
    }
}
    
    
    