import assert from 'assert'

import * as SUT from './App.utils'

describe('App utils', () => {
  describe('getTitle', () => {
    it('should return expected title', () => {
      assert.strictEqual(SUT.getTitle(), 'REACT Playground')
    })
  })
})
