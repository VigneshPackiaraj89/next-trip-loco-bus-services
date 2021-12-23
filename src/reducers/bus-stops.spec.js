import {busstops} from './bus-stops'
import * as Types from '../actions/action-types'

describe('bus stops', function() {
    const state = {}
    it('arguments sets default state works', function () {
       expect(busstops()).toEqual({stopsData:[]})
    })

    it('set Bus stops on api success', function () {
        const newState = busstops(state, {type: Types.STORE_STOPS, data: {'a':'b'}})
        expect(newState).toEqual({stopsData:{a:'b'}, storeShopError: false})
     })

    it('set Bus stops on api failure', function () {
        const newState = busstops(state, {type: Types.STOPS_API_ERROR})
        expect(newState).toEqual({stopsData:[], storeShopError: true})
    })
})