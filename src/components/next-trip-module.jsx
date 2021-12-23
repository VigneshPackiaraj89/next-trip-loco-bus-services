import * as React from 'react'
import './next-trip-module.less'
import {useSelector, useDispatch} from 'react-redux'
import {getDirections} from '../actions/get-directions'
import {getStops} from '../actions/get-stops'
import {getStopsNumber} from '../actions/get-stops-number'
import {getStationDetails} from '../actions/get-station-details'
import {ErrorHandling} from  './error-handling'
import * as Types from '../actions/action-types'
import {BusTimingsTable} from './bus-timings-table'
import pinblue from './static-assets/pin-blue.svg'

export const NextTrip = () => {
    const dispatch = useDispatch()
    const {data} = useSelector(state => state.busroutes)
    const {directionData} = useSelector(state => state.busdirections)
    const {stopsData} = useSelector(state => state.busstops)
    const {busDetailsData} = useSelector(state => state.busdetails)

    const [busroute, setBusRoute] = React.useState('')
    const [busdirection, setBusDirection] = React.useState('')
    const [busstop, setStop] = React.useState('')
    const [byRoute, setByRoute] = React.useState(true)
    const [locUrlSet, setlocUrl] = React.useState(false)
    const [showError, setShowError] = React.useState(false)

    const [userInputStopNo, setUserInputStopNo] = React.useState(0)
    
    const handleChange = (event) => {
        if (event.charCode === 13) {
            event.preventDefault();
            document.getElementById("search").click();
          }
    }

    React.useEffect(() => {
        let locUrl = window.location.pathname.split('/')
        if(locUrl.length === 5) {
            dispatch(getStationDetails(locUrl[4], locUrl[3], locUrl[2]))
            setlocUrl(true)
            setByRoute(true)
        } else if(locUrl.length === 3) {
            dispatch(getStopsNumber(locUrl[2]))
            setByRoute(false)
            setlocUrl(true)
            setUserInputStopNo(locUrl[2])
        }
    },[])

    const trackChange = (e) => {
        setBusDirection('')
        const {value} = e.target
        setBusRoute(value)
        dispatch(getDirections(value))
    }

    const trackDirection= (e) => {
        setStop('')
        const {value} = e.target
        setBusDirection(value)
        dispatch(getStops(value, busroute))
    }

    const trackStop= (e) => {
        const {value} = e.target
        setStop(value)
        setlocUrl(false)
        {value !== 'Select stop' && dispatch(getStationDetails(value, busdirection, busroute))}
    }

    const dispatchStopNumber = () => {
        let stopNumber = document.getElementById('search-input').value
        // eslint-disable-next-line no-useless-escape
        if(/[^\d\.]/.test(stopNumber) || stopNumber === '') {
            setShowError(true)
            setUserInputStopNo('')
            setlocUrl(false)
        } else {
            setShowError(false)
            setUserInputStopNo(stopNumber)
            dispatch(getStopsNumber(stopNumber))
        }
        document.getElementById('search-input').value = ''
    }

    const resetSearchCriteria = (byRoute) => {
        setByRoute(byRoute)
        setBusRoute('')
        setBusDirection('')
        setStop('')
        setUserInputStopNo('')
        setlocUrl(false)
        setShowError(false)
        dispatch({type: Types.RESET_STOPS_INFO})
    }
    
    React.useEffect(()=>{
        var elem = document.getElementById("nextripDepartures")
        var elem2 = document.getElementById("displayError")
        elem ? elem.scrollIntoView({behavior: "smooth"}) : elem2 && elem2.scrollIntoView({behavior: "smooth"}) 
    },[busDetailsData])
 
    return(
    <div className={`next-trip`}>
        <div className="card mb-4">
            <h2 className="text-center mb-4 mb-lg-5">Real-time Departures</h2>
            <div className="d-flex justify-content-center mb-4 pills">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className={byRoute ? `nav-link nextrip-tab active` : `nav-link nextrip-tab`} onClick={()=> resetSearchCriteria(true)} id="byRouteTab" 
                        data-toggle="pill" href="#byRoute" role="tab" aria-controls="byRouteTab" aria-selected="true">By route</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className={byRoute ? `nav-link nextrip-tab` : `nav-link nextrip-tab active`} onClick={()=> resetSearchCriteria(false)} 
                        id="byStopNumTab" data-toggle="pill" href="#byStopNumTab" role="tab" aria-controls="byStopNumTab" aria-selected="false">By stop #</a>
                    </li>
                </ul>       
            </div>
            <div className="d-flex justify-content-center">
                <div className="tab-content">
                    <div className="tab-pane show active" id="byRoute" role="tabpanel" aria-labelledby="byRouteTab">
                        {byRoute ? 
                        <fieldset className="mb-0">
                            <legend className="sr-only">Real-time departures by route</legend>
                            <div className="form-group select-route">
                                <select id="ntRoute" name="ntRoute" className="custom-select" onChange={trackChange} value={busroute}>
                                    <option selected="">Select route</option>
                                    {Array.isArray(data) && data.length > 0 && data?.map((item, index) => {
                                        return <option key= {index} value={item.route_id}> {item.route_label} </option>
                                    })}
                                </select>
                            </div>
                            {busroute && busroute!== 'Select route' && <div className="form-group select-route">
                                <select id="ntDirection" name="ntDirection" className="custom-select"  onChange={trackDirection} value={busdirection}>
                                    <option selected="">Select direction</option>
                                    { Array.isArray(directionData) && directionData?.map((item, index) => {
                                        return <option key= {index} value={item.direction_id}> {item.direction_name} </option>
                                    })}
                                </select>
                            </div>}
                            {busdirection && busdirection !== 'Select direction' &&  <div className="form-group select-route">
                                <select id="ntStop" name="ntStop" className="custom-select" onChange={trackStop} value={busstop}>
                                    <option selected="">Select stop</option>
                                    {Array.isArray(stopsData) && stopsData.length > 0 && stopsData?.map((item, index) => {
                                        return <option key= {index}  value={item.place_code}> {item.description} </option>
                                    })}
                                </select>
                            </div>}   
                        </fieldset>
                        :
                        <fieldset className="mb-0">
                            <legend className="sr-only">Real-time departures by stop</legend>
                            <div className="input-group mb-3" id="search-input-group" >
                                <input type="number" id="search-input" className={showError ? "form-control invalid" : "form-control"} aria-label="Enter stop number" aria-describedby="basic-addon2" onKeyPress={handleChange} required/>                                    
                                <label className="form-control-placeholder" htmlFor="name">Enter stop number</label>
                                <div className="input-group-append">
                                    <button id="search" className={showError ? "btn btn-outline-secondary invalid" : "btn btn-outline-secondary"} type="button" onClick={() => dispatchStopNumber()}> <i className="fa fa-search"></i></button>
                                </div>
                            </div>
                            <div className="inputValidation">{showError && 'Please enter a valid number.'}</div>
                        </fieldset>
                        }
                    </div>
                </div>
            </div>
            <div className="text-right d-lg-none">
                <span id="ntrUseCurrentLoc">
                    <a href="#">Use current
                        location&nbsp;<img alt="" src={pinblue}/></a>
                </span>
            </div>
        </div>
        { ((busdirection && busroute && busstop && busdirection !== 'Select direction' && busroute!== 'Select route' && busstop!=='Select stop' && !showError)
            || userInputStopNo || locUrlSet ) ? <BusTimingsTable /> : null }
        {!showError && <ErrorHandling userInputStopNo={userInputStopNo}/>}
    </div>)
}