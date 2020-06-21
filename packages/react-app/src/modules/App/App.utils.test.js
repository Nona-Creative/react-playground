import * as SUT from './App.utils'

describe('App utils', () => {
  describe('getTitle', () => {
    it('should return expected title', () => {
      expect(SUT.getTitle()).toEqual('REACT Playground')
    })
  })
})
