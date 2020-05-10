import SUT, {
  decrementCounter,
  incrementCounter,
} from './Counter.reducer'

describe('modules/Counter/Counter.reducer', () => {
  describe('incrementCount', () => {
    it('should increment count by provided amount', () => {
      // given ... count is currently 6
      const state = { count: 6 }

      // when ... we increment by 3
      const result = SUT(state, incrementCounter(3))

      // then ... should update count to 9
      expect(result).toEqual({ count: 9 })
    })
  })

  describe('decrementCount', () => {
    it('should decrement count by provided amount', () => {
      // given ... count is currently 6
      const state = { count: 6 }

      // when ... we decrement counter by 5
      const result = SUT(state, decrementCounter(5))

      // then ... should update count to 5
      expect(result).toEqual({ count: 1 })
    })
  })
})
