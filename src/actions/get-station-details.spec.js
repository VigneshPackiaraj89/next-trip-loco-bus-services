/* eslint-disable no-import-assign */
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as Types from './action-types'
import { getStationDetails } from './get-station-details'
import * as api from '../utils/base-fetch'

const mockStore = configureStore([thunk])

describe('getRoutes', function () {
  let store

  const devicesApiResponse = require('../../mock-data/bus-details.json')

  beforeEach(function () {
    api.baseFetch = jest.fn(() => Promise.resolve(devicesApiResponse))
    store = mockStore({})
  })

    it('getStationDetails ', function () {
        const expectedUrl = `http://svc.metrotransit.org/nextripv2/902/0/TF2`

        return store.dispatch(getStationDetails('TF2', 0, 902)).then(() => {
        expect(api.baseFetch).toHaveBeenCalledWith(expectedUrl)
        expect(store.getActions()).toEqual([
            { type: Types.STORE_BUS_DETAILS, data: devicesApiResponse}
        ])
        })
    })

    it('getStationDetails - Error Scenario', function () {
      const expectedUrl = `http://svc.metrotransit.org/nextripv2/902/0/TF2`
      api.baseFetch = jest.fn(() => Promise.reject(new Error('invalid')))

      return store.dispatch(getStationDetails('TF2', 0, 902)).then(() => {
        expect(api.baseFetch).toHaveBeenCalledWith(expectedUrl)
        expect(store.getActions()).toEqual([
            { type: Types.BUS_DETAILS_API_ERROR}
        ])
        })
    })
})