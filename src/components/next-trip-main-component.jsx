import * as React from 'react'
import './next-trip-main-component.less'
import {Header} from './header'
import {NextTrip} from './next-trip-module'
import {NextTripImage} from './next-trip-image'
import {useDispatch} from 'react-redux'
import { getRoutes } from '../actions/get-bus-routes'

export const NextTripMainComponent = (props) => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getRoutes())
    }, [])
    return(
    <div className={`main-container`}>
        <Header {...props}/>
        <NextTripImage />
        <NextTrip  {...props}/>
    </div>)
}