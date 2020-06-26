import sinon from 'sinon'

import {
  selectCounter,
  navigateToCounters,
  navigateToSelectedCounter,
} from './counters.reducer'
import * as SUT from './counter.middleware'

describe('modules/Counter/selectCounter.middleware', () => {
  let sandbox = null

  beforeEach(async () => {
    sandbox = await sinon.createSandbox()
  })

  afterEach(async () => {
    await sandbox.restore()
  })

  describe('selectCounterFlow', () => {
    it('should select a counter from url', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()

      // when ... a counter gets selected
      const payload = {
        location: {
          pathname: '/counter/1',
        },
      }
      const action = {
        type: '@@router/LOCATION_CHANGE',
        payload,
      }
      const middleware = SUT.selectCounterFlow
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, selectCounter('1'))
    })
  })
  
  describe('navigateToCounterFlow', () => {
    it('should navigate to selected counter', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()
      const pushStub = sandbox.stub()

      // when ... a counter gets selected
      const action = navigateToSelectedCounter('1')
      const middleware = SUT.navigateToCounterFlow(pushStub)
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, pushStub('/counter/1'))
    })
  })

  describe('navigateToCountersFlow', () => {
    it('should navigate back to the counter overview', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()
      const pushStub = sandbox.stub()

      // when ... a counter gets selected
      const action = navigateToCounters()
      const middleware = SUT.navigateToCountersFlow(pushStub)
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, pushStub('/'))
    })
  })
})
