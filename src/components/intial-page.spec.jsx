import {InitialPage} from './intial-page'
import {mount} from 'enzyme'

describe('initialPage', function () {
    let renderComp = () => mount(<InitialPage/>) 

it('initial page loaded succesfully', () => {
    let component = renderComp()
    expect(component.find('.initial-page-container').length).toEqual(1)
    expect(component.find('Header').length).toEqual(1)
    expect(component.find('NextTripImage').length).toEqual(1)
})

})