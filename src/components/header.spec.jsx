import {Header} from './header'
import {mount} from 'enzyme'
import MetroTransitLogo from '../../assets/MetroTransitLogo.svg'

describe('Header Page', function () {
    let renderComp = () => mount(<Header/>) 

it('Header Loaded Successfully', () => {
    let component = renderComp()
    expect(component.find('#header').length).toEqual(1)
    expect(component.find('.d-inline-block').length).toEqual(1)
    expect(component.find('.d-inline-block').prop('src')).toEqual(MetroTransitLogo)
    expect(component.find('.navbar-nav').length).toEqual(1)
})
})