import {busroutes} from './bus-routes'
import * as Types from '../actions/action-types'

describe('bus routes', function() {
    const state = {}
    it('arguments sets default state works', function () {
       expect(busroutes()).toEqual({data:[]})
    })

    it('set Bus routes on api success', function () {
        const newState = busroutes(state, {type: Types.STORE_ROUTES_INFO, data: {'a':'b'}})
        expect(newState).toEqual({data:{a:'b'}, storeRouteApiError: false})
     })

    it('set Bus routes on api failure', function () {
        const newState = busroutes(state, {type: Types.ROUTE_API_ERROR})
        expect(newState).toEqual({data:[], storeRouteApiError: true})
    })
})