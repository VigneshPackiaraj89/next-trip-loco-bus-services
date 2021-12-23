import {BusTimingsTable} from './bus-timings-table'
import {mount} from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider} from 'react-redux'

const mockStore = configureStore([thunk])

const  busTimingObj = [
   {
      "stops":[
         {
            "stop_id":51437,
            "latitude":44.855876,
            "longitude":-93.231499,
            "description":"28th Ave Station"
         }
      ],
      "alerts":[
         {
            "stop_closed":false,
            "alert_text":"Upper levels of Metro Transit's 28th Ave Station parking ramp are closed until further notice"
         },
         {
            "stop_closed":false,
            "alert_text":"South tower elevator at Blue Line Franklin Ave Station unavailable until further notice due to mechanical issue"
         }
      ],
      "departures":[
         {
            "actual":true,
            "trip_id":"20247230-DEC21-RAIL-Weekday-01",
            "stop_id":51437,
            "departure_text":"6 Min",
            "departure_time":1640185860,
            "description":"to Mpls-Target Field",
            "route_id":"901",
            "route_short_name":"Blue",
            "direction_id":0,
            "direction_text":"NB",
            "schedule_relationship":"Scheduled"
         },
         {
            "actual":false,
            "trip_id":"20247213-DEC21-RAIL-Weekday-01",
            "stop_id":51437,
            "departure_text":"9:23",
            "departure_time":1640186580,
            "description":"to Mpls-Target Field",
            "route_id":"901",
            "route_short_name":"Blue",
            "direction_id":0,
            "direction_text":"NB",
            "schedule_relationship":"Scheduled"
         }
      ]
   },
   {
      "stops":[
         {
            "stop_id":51437,
            "latitude":44.855876,
            "longitude":-93.231499,
            "description":"28th Ave Station"
         }
      ],
      "alerts":[
         {
            "stop_closed":false,
            "alert_text":"Upper levels of Metro Transit's 28th Ave Station parking ramp are closed until further notice"
         },
         {
            "stop_closed":false,
            "alert_text":"South tower elevator at Blue Line Franklin Ave Station unavailable until further notice due to mechanical issue"
         }
      ],
      "departures":[
         
      ]
   },
   {
      "stops":[
         {
            "stop_id":51437,
            "latitude":44.855876,
            "longitude":-93.231499,
            "description":"28th Ave Station"
         }
      ],
      "alerts":[
         {
            "stop_closed":false,
            "alert_text":"Upper levels of Metro Transit's 28th Ave Station parking ramp are closed until further notice"
         },
         {
            "stop_closed":false,
            "alert_text":"South tower elevator at Blue Line Franklin Ave Station unavailable until further notice due to mechanical issue"
         }
      ],
      "departures":[
         {
            "actual":true,
            "trip_id":"20247230-DEC21-RAIL-Weekday-01",
            "stop_id":51437,
            "departure_text":"6 Min",
            "departure_time":1640185860,
            "description":"to Mpls-Target Field",
            "route_id":"901",
            "route_short_name":"Blue",
            "direction_id":0,
            "direction_text":"NB",
            "schedule_relationship":"Scheduled"
         },
         {
            "actual":false,
            "trip_id":"20247213-DEC21-RAIL-Weekday-01",
            "stop_id":51437,
            "departure_text":"9:23",
            "departure_time":1640186580,
            "description":"to Mpls-Target Field",
            "route_id":"901",
            "route_short_name":"Blue",
            "direction_id":0,
            "direction_text":"NB",
            "schedule_relationship":"Scheduled"
         },
         {
            "actual":false,
            "trip_id":"20247213-DEC21-RAIL-Weekday-01",
            "stop_id":51437,
            "departure_text":"9:23",
            "departure_time":1640186580,
            "description":"to Mpls-Target Field",
            "route_id":"901",
            "route_short_name":"Blue",
            "direction_id":0,
            "direction_text":"NB",
            "schedule_relationship":"Scheduled"
         },
         {
            "actual":false,
            "trip_id":"20247213-DEC21-RAIL-Weekday-01",
            "stop_id":51437,
            "departure_text":"9:23",
            "departure_time":1640186580,
            "description":"to Mpls-Target Field",
            "route_id":"901",
            "route_short_name":"Blue",
            "direction_id":0,
            "direction_text":"NB",
            "schedule_relationship":"Scheduled"
         }
      ]
   }
]

describe('BusTimingsTable', function () {
    let props = {userInputStopNo: '123'}
    let store = mockStore({
        busroutes:{},
        busdirections:{},
        busstops:{},
        busdetails:{
            busDetailsData:  busTimingObj[0]
        }
    })
    let renderComp = () =>mount(<Provider store={store}><BusTimingsTable {...props}/></Provider>) 

it('BusTimings table Successfully loaded ', () => {

    let component = renderComp()
    expect(component.find('.h2.stop-name').text()).toEqual('28th Ave Station')
    expect(component.find('.stop-number').text()).toEqual('Stop #: 51437')
    expect(component.find('tr').length).toEqual(3)
    expect(component.find('th').at(0).text()).toEqual('Route')
    expect(component.find('th').at(1).text()).toEqual('Destination')
    expect(component.find('th').at(2).text()).toEqual('Departs')
    expect(component.find('#rowid_0').length).toEqual(1)
    expect(component.find('#rowid_1').length).toEqual(1)
    expect(component.find('.less').length).toEqual(0)
    expect(component.find('.more').length).toEqual(0)
    expect(component.find('#showMyBus').length).toEqual(1)
    expect(component.find('.showTrainTxt').text()).toEqual('Show my train')
})

it('BusTimings table Successfully loaded - Doesnt have any search result', () => {
    store = mockStore({
        busroutes:{},
        busdirections:{},
        busstops:{},
        busdetails:{
            busDetailsData: busTimingObj[1]
        }
        })
    let component = renderComp()
    expect(component.find('.h2.stop-name').text()).toEqual('28th Ave Station')
    expect(component.find('.stop-number').text()).toEqual('Stop #: 51437')
    expect(component.find('tr').length).toEqual(2)
    expect(component.find('th').at(0).text()).toEqual('Route')
    expect(component.find('th').at(1).text()).toEqual('Destination')
    expect(component.find('th').at(2).text()).toEqual('Departs')
    expect(component.find('.no-departure').length).toEqual(1)
    expect(component.find('.no-departure').text()).toEqual('No departures at this time')
})

it('BusTimings table Successfully loaded - have more than 3 data', () => {
    jest.spyOn(global, 'setTimeout');
    store = mockStore({
        busroutes:{},
        busdirections:{},
        busstops:{},
        busdetails:{
            busDetailsData:  busTimingObj[2]
        }
    })
    let component = renderComp()
    expect(component.find('.h2.stop-name').text()).toEqual('28th Ave Station')
    expect(component.find('.stop-number').text()).toEqual('Stop #: 51437')
    expect(component.find('tr').length).toEqual(5)
    expect(component.find('th').at(0).text()).toEqual('Route')
    expect(component.find('th').at(1).text()).toEqual('Destination')
    expect(component.find('th').at(2).text()).toEqual('Departs')
    expect(component.find('.more').length).toEqual(1)
    component.find('.more').simulate('click')
    expect(component.find('.less').length).toEqual(1)
    expect(setTimeout).toHaveBeenCalledTimes(1);
    component.find('.less').simulate('click')
    expect(component.find('.more').length).toEqual(1)
})
})