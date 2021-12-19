import * as React from 'react'
import './next-trip-module.less'
import {useSelector, useDispatch} from 'react-redux'
import {getDirections} from '../actions/get-directions'
import {getStops} from '../actions/get-stops'
import {getStopsNumber} from '../actions/get-stops-number'
import {getStationDetails} from '../actions/get-station-details'
import {ErrorHandling} from  './error-handling'

export const NextTrip = (props) => {
    const dispatch = useDispatch()
    const {data} = useSelector(state => state.busroutes)
    const {directionData} = useSelector(state => state.busdirections)
    const {stopsData} = useSelector(state => state.busstops)
    const {busDetailsData} = useSelector(state => state.busdetails)

    const [busroute, setBusRoute] = React.useState('')
    const [busdirection, setBusDirection] = React.useState('')
    const [busstop, setStop] = React.useState('')
    const [byRoute, setByRoute] = React.useState(true)
    const [tblRerender, setTableRender] = React.useState(false)

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
        dispatch(getStationDetails(value, busdirection, busroute))
    }

    const dispatchStopNumber = (e) => {
        let stopNumber = document.getElementById('search-input').value
        console.log(stopNumber)
        dispatch(getStopsNumber(stopNumber))
    }

    return(
    <div className={`next-trip`}>
        <ErrorHandling />
        <div className="card mb-4">
            <h2 className="text-center mb-4 mb-lg-5">Real-time Departures</h2>
            <div className="d-flex justify-content-center mb-4">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link nextrip-tab active" onClick={()=> setByRoute(true)}id="byRouteTab" data-toggle="pill" href="#byRoute" role="tab" aria-controls="byRouteTab" aria-selected="true">By route</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link nextrip-tab" onClick={()=> setByRoute(false)} id="byStopNumTab" data-toggle="pill" href="#byRouteNum" role="tab" aria-controls="byRouteNumTab" aria-selected="false">By stop #</a>
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
                                    {data && data.map((item) => {
                                        return <option value={item.route_id}> {item.route_label} </option>
                                    })}
                                </select>
                            </div>
                            {busroute && <div className="form-group select-route">
                                <select id="ntDirection" name="ntDirection" className="custom-select"  onChange={trackDirection} value={busdirection}>
                                    <option selected="">Select direction</option>
                                    {directionData && directionData.map((item) => {
                                        return <option value={item.direction_id}> {item.direction_name} </option>
                                    })}
                                </select>
                            </div>}
                            {busdirection &&  <div className="form-group select-route">
                                <select id="ntStop" name="ntStop" className="custom-select" onChange={trackStop} value={busstop}>
                                    <option selected="">Select stop</option>
                                    {stopsData && stopsData.map((item) => {
                                        return <option value={item.place_code}> {item.description} </option>
                                    })}
                                </select>
                            </div>}   
                        </fieldset>
                        :
                        <fieldset className="mb-0">
                            <legend className="sr-only">Real-time departures by stop</legend>
                            <div class="input-group mb-3" id="search-input-group" >
                                <input type="number" id="search-input" class="form-control" placeholder="Enter stop number" aria-label="Enter stop number" aria-describedby="basic-addon2" />                                    
                                <label class="form-control-placeholder" for="name">Full Name</label>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" onClick={() => dispatchStopNumber()}> <i class="fa fa-search"></i></button>
                                </div>
                                </div>
                        </fieldset>
                        }
                    </div>
                </div>
            </div>
        </div>
       {Object.keys(busDetailsData).length !== 0 &&  <div id="nextripDepartures" className="nextrip-departures">
            <div className="card mb-3 p-3 p-md-3">
                <a name="nextriptop"></a>
                <div className="stop-description mb-3">
                   <span><h3 className="h2 stop-name">{busDetailsData.stops[0].description}</h3></span>
                    <span className="stop-number"><strong>Stop #: </strong>{busDetailsData.stops[0].stop_id}</span>
                </div>
                <div className="stop-departures">
                    <table className={tblRerender ? "table departures-table-render" : "table departures-table"}>
                        <caption className="sr-only">Departures table</caption>
                        <thead>
                            <tr>
                                <th className="route">Route</th>
                                <th className="destination">Destination</th>
                                <th className="departs text-right">Departs</th>
                            </tr>
                        </thead>
                        <tbody>
                                {busDetailsData.departures && busDetailsData.departures.length === 0 ?
                                     <tr className="departure"><td><b>No departures at this time</b></td></tr>
                                :
                                busDetailsData.departures.map((item) =>
                                <tr>
                                    <td className="route-number mr-2">{item.route_short_name}</td>
                                    <td className="route-name">{item.description}</td>
                                    <td className="depart-time ml-auto">
                                        <span>{item.departure_text}</span>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                    {busDetailsData.departures.length > 3 && 
                        <button type="button" className={tblRerender ? `btn btn-toggle show less`: `btn btn-toggle show more`} aria-expanded="false" onClick={()=>setTableRender(!tblRerender)}>
                        <span className="h4">Departures</span>
                    </button>}
                </div>
            </div>
        </div>}
        {busDetailsData & busDetailsData.departures && busDetailsData.departures.length !== 0 && <div id="showMyBus" className="accordion nt-show-my-bus" aria-hidden="true">
            <button type="button" className="btn d-flex align-items-center btn-block text-left" data-toggle="collapse" data-target="#collapseMap" aria-expanded="true">
                <h3>Show my train</h3>
            </button>
            <div id="collapseMap" class ="collapse show">
                <div class ="map-container">
                </div>
            </div>
        </div>}
    </div>)
}