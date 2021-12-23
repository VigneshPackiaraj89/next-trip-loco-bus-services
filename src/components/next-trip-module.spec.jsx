import {NextTrip} from './next-trip-module'
import {mount} from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider} from 'react-redux'

const mockStore = configureStore([thunk])

describe('next trip main component', function () {
    let store = mockStore({
        busroutes:{},
        busdirections:{},
        busstops:{},
        busdetails:{
            busDetailsData:{}
        }
    })
    let props= {}
    let renderComp = () => mount(<Provider store={store}><NextTrip {...props}/></Provider>) 

it('next trip main component gets loaded successfully', () => {

    let component = renderComp()
    expect(component.find('.next-trip').length).toEqual(1)
    expect(component.find('.next-trip h2').text()).toEqual('Real-time Departures')
    expect(component.find('#byRouteTab').length).toEqual(1)
    expect(component.find('#byStopNumTab').length).toEqual(1)
    component.find('#byRouteTab').simulate('click')
    expect(component.find('fieldset legend').text()).toEqual('Real-time departures by route')
    component.find('#byStopNumTab').simulate('click')
    expect(component.find('fieldset legend').text()).toEqual('Real-time departures by stop')
    component.find('#search-input').simulate('change', { target: { value: '123' } })
})

it('handleChange', () => {

    let component = renderComp()
    expect(component.find('.next-trip').length).toEqual(1)
    expect(component.find('.next-trip h2').text()).toEqual('Real-time Departures')
    expect(component.find('#byRouteTab').length).toEqual(1)
    expect(component.find('#byStopNumTab').length).toEqual(1)
    component.find('#byStopNumTab').simulate('click')
    component.find('#search-input').simulate('change', { target: { value: '123' } })
    component.find('#search-input').simulate('keypress', {key: 'Enter'})
    expect(component.find('fieldset legend').text()).toEqual('Real-time departures by stop')
})
})