import sinon from 'sinon'

import {
  selectCounter,
} from './selectCounter.reducer'
import * as SUT from './selectCounter.middleware'

describe('modules/Counter/selectCounter.middleware', () => {
  let sandbox = null

  beforeEach(async () => {
    sandbox = await sinon.createSandbox()
  })

  afterEach(async () => {
    await sandbox.restore()
  })

  describe('selectCounterFlow', () => {
    it('should select a counter by dispatching a push into history', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()
      const pushStub = sandbox.stub()

      // when ... a counter gets selected
      const action = selectCounter(1)
      const middleware = SUT.selectCounterFlow(pushStub)
      middleware(store)(nextStub)(action)

      // then ... should push a new url
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, pushStub('/counter/1'))
    })
  })
})
