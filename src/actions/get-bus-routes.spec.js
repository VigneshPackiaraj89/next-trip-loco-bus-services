/* eslint-disable no-import-assign */
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as Types from './action-types'
import { getRoutes } from './get-bus-routes'
import * as api from '../utils/base-fetch'

const mockStore = configureStore([thunk])

describe('getRoutes', function () {
  let store

  const devicesApiResponse = require('../../mock-data/bus-routes.json')

  beforeEach(function () {
    api.baseFetch = jest.fn(() => Promise.resolve(devicesApiResponse))
    store = mockStore({})
  })

    it('getRoutes', function () {
        const expectedUrl = `http://svc.metrotransit.org/nextripv2/routes`
     
        return store.dispatch(getRoutes()).then(() => {
        expect(api.baseFetch).toHaveBeenCalledWith(expectedUrl)
        expect(store.getActions()).toEqual([
            { type: Types.STORE_ROUTES_INFO, data: devicesApiResponse}
        ])
        })
    })

    it('getRoutes - Error Scenario', function () {
      const expectedUrl = `http://svc.metrotransit.org/nextripv2/routes`
      api.baseFetch = jest.fn(() => Promise.reject(new Error('invalid')))

      return store.dispatch(getRoutes()).then(() => {
      expect(api.baseFetch).toHaveBeenCalledWith(expectedUrl)
      expect(store.getActions()).toEqual([
          { type: Types.ROUTE_API_ERROR}
      ])
      })
    })
})