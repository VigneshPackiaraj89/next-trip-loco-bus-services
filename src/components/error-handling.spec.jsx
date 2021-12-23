import {ErrorHandling} from './error-handling'
import {mount} from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider} from 'react-redux'

const mockStore = configureStore([thunk])

describe('ErrorHandling', function () {
    let props = {userInputStopNo: '123'}
    let store = mockStore({
        busroutes:{},
        busdirections:{},
        busstops:{},
        busdetails:{
            detailsError: true
        }
    })
    let renderComp = () =>mount(<Provider store={store}><ErrorHandling {...props}/></Provider>) 

it('ErrorHandling - when details error occurs', () => {

    let component = renderComp()
    expect(component.find('.displayError').length).toEqual(1)
    expect(component.find('.displayError').text()).toEqual('123 is not a valid stop number.')
})

it('ErrorHandling - when details error occurs', () => {
    store = mockStore({
        busroutes:{},
        busdirections:{directionApiError: true},
        busstops:{},
        busdetails:{
            detailsError: false
        }
    })
    let component = renderComp()
    expect(component.find('.displayError').length).toEqual(1)
    expect(component.find('.displayError').text()).toEqual('Please try again')
})

})