import {busdetails} from './bus-details'
import * as Types from '../actions/action-types'

describe('Bus Details', function() {
    const state = {}
    it('arguments sets default state works', function () {
       expect(busdetails()).toEqual({busDetailsData:{}, detailsError: false})
    })

    it('set Bus Details on api success', function () {
        const newState = busdetails(state, {type: Types.STORE_BUS_DETAILS, data: {'a':'b'}})
        expect(newState).toEqual({busDetailsData:{a:'b'}, detailsError: false})
     })

    it('set Bus Details on api failure', function () {
        const newState = busdetails(state, {type: Types.BUS_DETAILS_API_ERROR})
        expect(newState).toEqual({busDetailsData:{}, detailsError: true})
    })

    it('RESET_STOPS_INFO', function () {
        const newState = busdetails(state, {type: Types.RESET_STOPS_INFO})
        expect(newState).toEqual({busDetailsData:{}, detailsError: false})
    })
})