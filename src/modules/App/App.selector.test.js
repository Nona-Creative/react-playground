import assert from 'assert'
import sinon from 'sinon'

import SUT from './App.selector'
import * as RouterUtils from '../../common/utils/object.utils'
import { pathRoutes } from './App.routes'

describe('App selector', () => {
  let sandbox = null

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('title', () => {
    it('should select title as expected', () => {
      // given ... a title in state
      const state = {
        app: {
          title: 'TITLE',
        },
      }

      // when ... we select state required by App component
      const result = SUT(state)

      // then ... should select title as expected
      assert.deepStrictEqual(result.title, 'TITLE')
    })
  })

  describe('route', () => {
    it('should select route as expected', () => {
      // given
      // ... a location pathname in state
      const state = {
        location: {
          pathname: 'CURRENT PATH',
        },
      }
      // ... and location pathname will match expected route
      const pickByKeyRegexStub = sandbox.stub(RouterUtils, 'pickByKeyRegex').returns('MATCHING ROUTE')

      // when ... we select state required by App component
      const result = SUT(state)

      // then
      // ... should select expected matching route
      assert.deepStrictEqual(result.route, 'MATCHING ROUTE')
      // ... and should have correctly matched route
      sinon.assert.calledWithExactly(pickByKeyRegexStub, pathRoutes, 'CURRENT PATH')
    })
  })
})
