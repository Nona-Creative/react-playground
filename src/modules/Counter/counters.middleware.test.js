import sinon from 'sinon'
import Bluebird from 'bluebird'

import { appInit } from '../App/app.reducer'
import {
  apiGetCounters,
  apiGetCountersSuccess,
  apiGetCountersFailure,
  setCounters,
} from './counters.reducer'
import * as SUT from './counters.middleware'

describe('modules/Counter/counters.reducer', () => {
  let sandbox = null

  beforeEach(async () => {
    sandbox = await sinon.createSandbox()
  })

  afterEach(async () => {
    await sandbox.restore()
  })

  describe('countersInitFlow', () => {
    it('should starts the API get counters flow on App initialization', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()

      // when ... the App initializes
      const action = appInit()
      const middleware = SUT.countersInitFlow
      middleware(store)(nextStub)(action)

      // then ... should start the API get counters flow
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, apiGetCounters('API DATA'))
    })
  })

  describe('apiGetCountersFlow', () => {
    it('should succeed with API data', async () => {
      // given
      // ... store methods will behave as expected
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()
      // ... API request to retrieve counters will respond with success
      const getCountersStub = sandbox.stub().resolves('API DATA')
      const apiStub = { getCounters: getCountersStub }

      // when ... we get counters from the API
      const action = apiGetCounters()
      const middleware = SUT.apiGetCountersFlow(apiStub)
      middleware(store)(nextStub)(action)

      await Bluebird.delay(10)

      // then ... should succeed with API data
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(getCountersStub)
      sinon.assert.calledWithExactly(dispatchStub, apiGetCountersSuccess('API DATA'))
    })

    it('should fail with error message', async () => {
      // given
      // ... store methods will behave as expected
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()
      // ... API request to retrieve counters will fail with message
      const getCountersStub = sandbox.stub().rejects(new Error('ERROR MESSAGE'))
      const apiStub = { getCounters: getCountersStub }

      // when ... we get counters from the API
      const action = apiGetCounters()
      const middleware = SUT.apiGetCountersFlow(apiStub)
      middleware(store)(nextStub)(action)

      await Bluebird.delay(10)

      // then ... should succeed with API data
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(getCountersStub)
      sinon.assert.calledWithExactly(dispatchStub, apiGetCountersFailure('ERROR MESSAGE'))
    })
  })

  describe('setCountersFlow', () => {
    it('should signals intention to update state with list of counters returned from API', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()

      // when ... we successfully get counters from API
      const action = apiGetCountersSuccess('COUNTERS')
      const middleware = SUT.setCountersFlow
      middleware(store)(nextStub)(action)

      // then ... should start the API get counters flow
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, setCounters('COUNTERS'))
    })
  })
})
