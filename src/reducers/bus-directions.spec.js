import {busdirections} from './bus-directions'
import * as Types from '../actions/action-types'

describe('Bus Directions', function() {
    const state = {}
    it('arguments sets default state works', function () {
       expect(busdirections()).toEqual({directionData:[]})
    })

    it('set Bus Directions on api success', function () {
        const newState = busdirections(state, {type: Types.STORE_DIRECTIONS, data: {'a':'b'}})
        expect(newState).toEqual({directionData:{a:'b'}, directionApiError: false})
     })

    it('set Bus busdirections on api failure', function () {
        const newState = busdirections(state, {type: Types.DIRECTIONS_API_ERROR})
        expect(newState).toEqual({directionData:[], directionApiError: true})
    })
})