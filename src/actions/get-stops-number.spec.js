/* eslint-disable no-import-assign */
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as Types from './action-types'
import { getStopsNumber } from './get-stops-number'
import * as api from '../utils/base-fetch'

const mockStore = configureStore([thunk])

describe('getStopsNumber', function () {
  let store

  const devicesApiResponse = require('../../mock-data/bus-details.json')

  beforeEach(function () {
    api.baseFetch = jest.fn(() => Promise.resolve(devicesApiResponse))
    store = mockStore({})
  })

    it('getStopsNumber ', function () {
        const expectedUrl = `http://svc.metrotransit.org/nextripv2/135`
        return store.dispatch(getStopsNumber(135)).then(() => {
        expect(api.baseFetch).toHaveBeenCalledWith(expectedUrl)
        expect(store.getActions()).toEqual([
            { type: Types.STORE_BUS_DETAILS, data: devicesApiResponse}
        ])
        })
    })

    it('getStopsNumber - Error Scenario', function () {
      const expectedUrl = `http://svc.metrotransit.org/nextripv2/135`
      api.baseFetch = jest.fn(() => Promise.reject(new Error('invalid')))

      return store.dispatch(getStopsNumber(135)).then(() => {
        expect(api.baseFetch).toHaveBeenCalledWith(expectedUrl)
        expect(store.getActions()).toEqual([
            { type: Types.BUS_DETAILS_API_ERROR}
        ])
        })
    })
})