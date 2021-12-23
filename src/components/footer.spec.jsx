import {Footer} from './footer'
import {mount} from 'enzyme'

describe('Footer', function () {
    let props = {page: 'initial'}
    let renderComp = () => mount(<Footer {...props}/>) 

it('Footer loaded successfully', () => {

    let component = renderComp()
    expect(component.find('.section').length).toEqual(1)
    expect(component.find('.btn-contact').length).toEqual(2)
    expect(component.find('.footer-img').length).toEqual(1)
})

})