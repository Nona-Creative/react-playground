import SUT, {
  decrementCounter,
  incrementCounter,
} from './counters.reducer'

describe('modules/Counter/counter.reducer', () => {
  describe('incrementCount', () => {
    it('should increment count by provided amount', () => {
      // given ... counter 2 currently has a count of 6
      const state = {
        1: { count: 0 },
        2: { count: 6 },
        3: { count: 0 },
      }

      // when ... we increment counter 2 by 3
      const id = 2
      const amount = 3
      const action = incrementCounter(id, amount)
      const result = SUT(state, action)

      // then ... should update it's count to 9
      const expected = {
        1: { count: 0 },
        2: { count: 9 },
        3: { count: 0 },
      }
      expect(result).toEqual(expected)
    })
  })

  describe('decrementCount', () => {
    it('should decrement count by provided amount', () => {
      // given ... counter 3 currently has a count of 6
      const state = {
        1: { count: 0 },
        2: { count: 0 },
        3: { count: 6 },
      }

      // when ... we decrement counter 3 by 1
      const id = 3
      const amount = 1
      const action = decrementCounter(id, amount)
      const result = SUT(state, action)

      // then ... should update count to 5
      expect(result).toEqual({
        1: { count: 0 },
        2: { count: 0 },
        3: { count: 5 },
      })
    })
  })
})
