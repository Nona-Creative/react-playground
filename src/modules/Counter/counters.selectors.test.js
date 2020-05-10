import { countersSelector } from './counters.selectors'

describe('modules/Counter/counters.selector', () => {
  it('should select counters as expected', () => {
    // given ... 3 counters
    const state = {
      counters: {
        1: { label: 'COUNTER 1', count: 5 },
        2: { label: 'COUNTER 2', count: 10 },
        3: { label: 'COUNTER 3', count: 15 },
      },
    }

    // when ... we select counters
    // then ... should denormalize and return as expected
    const result = countersSelector(state)
    expect(result).toEqual({
      counters: [
        { id: '1', label: 'COUNTER 1', count: 5 },
        { id: '2', label: 'COUNTER 2', count: 10 },
        { id: '3', label: 'COUNTER 3', count: 15 },
      ],
    })
  })
})
