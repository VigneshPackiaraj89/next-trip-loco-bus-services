/* eslint-disable no-import-assign */
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as Types from './action-types'
import { getStops } from './get-stops'
import * as api from '../utils/base-fetch'

const mockStore = configureStore([thunk])

describe('getStops', function () {
  let store

  const devicesApiResponse = require('../../mock-data/stops.json')

  beforeEach(function () {
    api.baseFetch = jest.fn(() => Promise.resolve(devicesApiResponse))
    store = mockStore({})
  })

    it('getStops ', function () {
        const expectedUrl = `http://svc.metrotransit.org/nextripv2/Stops/902/0`
      
        return store.dispatch(getStops(0, 902)).then(() => {
        expect(api.baseFetch).toHaveBeenCalledWith(expectedUrl)
        expect(store.getActions()).toEqual([
            { type: Types.STORE_STOPS, data: devicesApiResponse}
        ])
        })
    })

    it('getStops - Error Scenario', function () {
      const expectedUrl = `http://svc.metrotransit.org/nextripv2/Stops/902/0`
      api.baseFetch = jest.fn(() => Promise.reject(new Error('error')))

      return store.dispatch(getStops(0, 902)).then(() => {
        expect(api.baseFetch).toHaveBeenCalledWith(expectedUrl)
        expect(store.getActions()).toEqual([
            { type: Types.STOPS_API_ERROR}
        ])
        })
    })
})