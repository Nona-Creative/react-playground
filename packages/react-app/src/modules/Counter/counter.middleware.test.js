import sinon from 'sinon'

import {
  selectCounter,
  navigateToCounters,
} from './counters.reducer'
import { setSelectedCounter } from './selectedCounter.reducer'
import * as SUT from './counter.middleware'

describe('modules/Counter/selectCounter.middleware', () => {
  let sandbox = null

  beforeEach(async () => {
    sandbox = await sinon.createSandbox()
  })

  afterEach(async () => {
    await sandbox.restore()
  })

  describe('navigateToCountersFlow', () => {
    it('should navigate back to the counter overview', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()
      const navigateStub = sandbox.stub()

      // when ... a counter gets selected
      const action = navigateToCounters()
      const middleware = SUT.navigateToCountersFlow(navigateStub)
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, navigateStub('/'))
    })
  })

  describe('selectedCounterFlow', () => {
    it('should select a counter', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()
      const navigateStub = sandbox.stub()

      // when ... we selecte a counter
      const action = selectCounter('1')
      const middleware = SUT.selectCounterFlow(navigateStub)
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, navigateStub('/counter/1'))
    })
  })

  describe('setSelectedCounterFlow', () => {
    it('should set selected counter on initial page load', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()

      // when ... a counter gets selected
      const payload = {
        location: {
          pathname: '/counter/1',
        },
        isFirstRendering: true,
      }
      const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'
      const action = {
        type: LOCATION_CHANGE,
        payload,
      }
      const middleware = SUT.setSelectedCounterFlow({ LOCATION_CHANGE })
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, setSelectedCounter('1'))
    })

    it('should not set selected counter on subsequent page load', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()

      // when ... a counter page is loaded
      const payload = {
        location: {
          pathname: '/counter/1',
        },
        isFirstRendering: false,
      }
      const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'
      const action = {
        type: LOCATION_CHANGE,
        payload,
      }
      const middleware = SUT.setSelectedCounterFlow({ LOCATION_CHANGE })
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.notCalled(dispatchStub)
    })

    it('should not set selected counter on when not a single counter page', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()

      // when ... a counter gets selected
      const payload = {
        location: {
          pathname: '/NOTcounter/1',
        },
        isFirstRendering: false,
      }
      const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'
      const action = {
        type: LOCATION_CHANGE,
        payload,
      }
      const middleware = SUT.setSelectedCounterFlow({ LOCATION_CHANGE })
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.notCalled(dispatchStub)
    })
  })
})
