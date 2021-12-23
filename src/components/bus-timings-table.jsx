import React from "react"
import showTrain from './static-assets/bus-broadcast-color.svg'
import {useSelector} from 'react-redux'
import './next-trip-module.less'

export const BusTimingsTable = () => {
    const [tblRerender, setTableRender] = React.useState(false)
    const {busDetailsData} = useSelector(state => state.busdetails)

    const scrollandopen = (datalength) => {
        setTableRender(!tblRerender)
        setTimeout(()=>{
            if(tblRerender)
                document.getElementById(`rowid_${datalength-1}`)?.scrollIntoView({behavior: "smooth"})
            else {
                document.getElementById(`rowid_1`)?.scrollIntoView({behavior: "smooth"})
            }
        },250)
    }

    return (<React.Fragment>
        {Object.keys(busDetailsData).length !== 0 && <div id="nextripDepartures" className="nextrip-departures">
            <div className="card mb-3 p-3 p-md-3">
                <a name="nextriptop"></a>
                <div className="stop-description mb-3">
                    <span><h3 className="h2 stop-name">{busDetailsData?.stops[0]?.description}</h3></span>
                    <span className="stop-number"><strong>Stop #: </strong>{busDetailsData?.stops[0]?.stop_id}</span>
                </div>
                <div className="stop-departures" id="stop-departures">
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
                            {busDetailsData?.departures?.length === 0 ?
                                <tr className="no-departure"><b>No departures at this time</b></tr>
                                :
                                busDetailsData?.departures?.map((item, index) =>
                                    <tr key={index} id={`rowid_${index}`}>
                                        <td className="route-number mr-2">{item.route_short_name}</td>
                                        <td className="route-name">{item.description}</td>
                                        <td className="depart-time ml-auto">
                                            <span>{item.departure_text}</span>
                                        </td>
                                    </tr>)}
                        </tbody>
                    </table>
                    {busDetailsData?.departures?.length > 3 &&
                        <button type="button" className={tblRerender ? `btn btn-toggle show less` : `btn btn-toggle show more`} aria-expanded="false" 
                        onClick={() => scrollandopen(busDetailsData?.departures?.length)}>
                            <span className="h4">Departures</span>
                        </button>}
                </div>
            </div>
        </div>}
        {busDetailsData?.departures && busDetailsData.departures.length !== 0 &&
            <div id="showMyBus" className="accordion nt-show-my-bus" aria-hidden="true">
                <button type="button" className="btn d-flex align-items-center btn-block text-left" data-toggle="collapse" data-target="#collapseMap" aria-expanded="true">
                    <img className='show-train' src={showTrain} />
                    <h3 className='showTrainTxt'>Show my train</h3>
                    <h4 className='underC'>Under Construction</h4>
                </button>
            </div>}
    </React.Fragment>)
}