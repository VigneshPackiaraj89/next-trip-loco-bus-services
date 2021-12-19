import * as React from 'react'
import './next-trip-module.less'
import {useSelector, useDispatch} from 'react-redux'
import {getDirections} from '../actions/get-directions'
import {getStops} from '../actions/get-stops'

export const NextTrip = (props) => {
    const dispatch = useDispatch()
    const {data} = useSelector(state => state.busroutes)
    const {directionData} = useSelector(state => state.busdirections)
    const {stopsData} = useSelector(state => state.busstops)
    const [busroute, setBusRoute] = React.useState('')
    const [busdirection, setBusDirection] = React.useState('')
    const [busstop, setStop] = React.useState('')
    const [byRoute, setByRoute] = React.useState(true)


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
    }

    return(
    <div className={`next-trip`}>
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
                                        return <option value={item.Route}> {item.Description} </option>
                                    })}
                                </select>
                            </div>
                            {busroute && <div className="form-group select-route">
                                <select id="ntDirection" name="ntDirection" className="custom-select"  onChange={trackDirection} value={busdirection}>
                                    <option selected="">Select direction</option>
                                    {directionData && directionData.map((item) => {
                                        return <option value={item.Value}> {item.Text} </option>
                                    })}
                                </select>
                            </div>}
                            {busdirection &&  <div className="form-group select-route">
                                <select id="ntStop" name="ntStop" className="custom-select" onChange={trackStop} value={busstop}>
                                    <option selected="">Select stop</option>
                                    {stopsData && stopsData.map((item) => {
                                        return <option value={item.Value}> {item.Text} </option>
                                    })}
                                </select>
                            </div>}   
                        </fieldset>
                        :
                        <fieldset className="mb-0">
                            <legend className="sr-only">Real-time departures by stop</legend>
                            <div class="input-group mb-3" id="search-input-group" >
                                <input type="text" id="search-input" class="form-control" placeholder="Enter stop number" aria-label="Enter stop number" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button"> <i class="fa fa-search"></i></button>
                                </div>
                                </div>
                        </fieldset>
                        }
                    </div>
                </div>
            </div>
        </div>
       {busstop &&  <div id="nextripDepartures" className="nextrip-departures">
            <div className="card mb-3 p-3 p-md-3">
                <a name="nextriptop"></a>
                <div className="stop-description mb-3">
                   <span><h3 className="h2 stop-name">MOA Transit Station</h3></span>
                    <span className="stop-number"><strong>Stop #: </strong>51405</span>
                </div>
                <div className="stop-departures">
                    <table className="table departures-table">
                        <caption className="sr-only">Departures table</caption>
                        <thead>
                            <tr>
                                <th className="route">Route</th>
                                <th className="destination">Destination</th>
                                <th className="departs text-right">Departs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="departure">
                                <td className="route-number mr-2">Blue</td>
                                <td className="route-name">to Mpls-Target Field</td>
                                <td className="depart-time ml-auto">
                                    <span>11 Min</span>
                                </td>
                            </tr>
                            <tr className="departure">
                                <td className="route-number mr-2">Blue</td>
                                <td className="route-name">to Mpls-Target Field</td>
                                <td className="depart-time ml-auto">
                                    <span>1:32</span>
                                </td>
                            </tr>
                            </tbody>
                    </table>
                    <button type="button" className="btn btn-toggle show more" aria-expanded="false">
                        <span className="h4">Departures</span>
                    </button>
                </div>
            </div>
        </div>}
        {busstop && <div id="showMyBus" className="accordion nt-show-my-bus" aria-hidden="true">
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