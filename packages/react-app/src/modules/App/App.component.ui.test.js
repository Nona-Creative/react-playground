import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import sinon from 'sinon'
import { Provider } from 'react-redux'

import App from './App.component'

describe('modules/App/App.component', () => {
  let sandbox = null

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('render', () => {
    it('should render successfully', () => {
      const subscribeStub = sandbox.stub()
      const dispatchStub = sandbox.stub()
      const getStateStub = sandbox.stub().returns({})
      const storeStub = {
        subscribe: subscribeStub,
        dispatch: dispatchStub,
        getState: getStateStub,
      }
      render((
        <Provider store={storeStub}>
          <Router>
            <App />
          </Router>
        </Provider>
      ))
    })
  })
})
