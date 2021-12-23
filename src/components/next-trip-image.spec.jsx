import {NextTripImage} from './next-trip-image'
import {mount} from 'enzyme'

describe('next-trip-image', function () {
    let props = {page: 'initial'}
    let renderComp = () => mount(<NextTripImage {...props}/>) 

it('initial page image loaded', () => {

    let component = renderComp()
    expect(component.find('.nextrip-initial').prop('className')).toEqual('primary passImage nextrip-initial')
    expect(component.find('h1').text()).toEqual('Welcome Page')

})

it('next trip page image loaded', () => {
    props.page = 'nextrip'
    let component = renderComp()
    expect(component.find('.nextrip-bg').prop('className')).toEqual('primary passImage nextrip-bg')
    expect(component.find('h1').text()).toEqual('NexTrip')

})

})