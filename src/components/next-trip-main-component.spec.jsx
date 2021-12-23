import {NextTripMainComponent} from './next-trip-main-component'
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
    let renderComp = () => mount(<Provider store={store}><NextTripMainComponent {...props}/></Provider>) 

it('next trip main component gets loaded successfully', () => {

    let component = renderComp()
    expect(component.find('.main-container').length).toEqual(1)
    expect(component.find('Header').length).toEqual(1)
    expect(component.find('NextTripImage').length).toEqual(1)
})
})