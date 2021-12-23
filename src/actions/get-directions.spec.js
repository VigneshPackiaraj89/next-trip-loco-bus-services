/* eslint-disable no-import-assign */
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as Types from './action-types'
import { getDirections } from './get-directions'
import * as api from '../utils/base-fetch'

const mockStore = configureStore([thunk])

describe('getDirections', function () {
  let store

  const devicesApiResponse = require('../../mock-data/bus-directions.json')

  beforeEach(function () {
    api.baseFetch = jest.fn(() => Promise.resolve(devicesApiResponse))
    store = mockStore({})
  })

    it('getDirections ', function () {
        const expectedUrl = `http://svc.metrotransit.org/nextripv2/Directions/902`

        return store.dispatch(getDirections(902)).then(() => {
        expect(api.baseFetch).toHaveBeenCalledWith(expectedUrl)
        expect(store.getActions()).toEqual([
            { type: Types.STORE_DIRECTIONS, data: devicesApiResponse}
        ])
        })
    })

    it('getDirections - Error Scenario', function () {
      const expectedUrl = `http://svc.metrotransit.org/nextripv2/Directions/902`
      api.baseFetch = jest.fn(() => Promise.reject(new Error('invalid')))

      return store.dispatch(getDirections(902)).then(() => {
        expect(api.baseFetch).toHaveBeenCalledWith(expectedUrl)
        expect(store.getActions()).toEqual([
            { type: Types.DIRECTIONS_API_ERROR}
        ])
        })
    })
})