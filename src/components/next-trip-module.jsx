import React from 'react'
import './next-trip-module.less'

export const NextTrip = (props) => {
    return(
    <div className={`next-trip`}>
        <div className="card mb-4">
            <h2 class="text-center mb-4 mb-lg-5">Real-time Departures</h2>
            <div class="d-flex justify-content-center mb-4">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link nextrip-tab active" id="byRouteTab" data-toggle="pill" href="#byRoute" role="tab" aria-controls="byRouteTab" aria-selected="true">By route</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link nextrip-tab" id="byStopNumTab" data-toggle="pill" href="#byRouteNum" role="tab" aria-controls="byRouteNumTab" aria-selected="false">By stop #</a>
                    </li>
                </ul>       
            </div>
            <select id="ntRoute" name="ntRoute" class="custom-select" onclick="this.setAttribute('value', this.value);" value=""></select>
        </div>
    </div>)
}