import SUT, {
  selectCounter,
} from './selectedCounter.reducer'

describe('modules/Counter/selectedCounter.reducer', () => {
  describe('selectCounter', () => {
    it('should set selected counter to the provided id', () => {
      // given ... no counter is currently selected
      const state = null

      // when ... we select counter 3
      const action = selectCounter('3')
      const result = SUT(state, action)

      // then ... should set selected counter to 3
      expect(result).toEqual(3)
    })
  })
})
