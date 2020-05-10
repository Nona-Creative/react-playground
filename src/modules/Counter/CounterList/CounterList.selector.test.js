import { keys } from 'ramda'

import selector from './CounterList.selector'

describe('modules/Counter/CounterList/CounterList.selector', () => {
  it('should select props required by CounterList component as expected', () => {
    // given ... 3 counters
    const state = {
      counters: {
        1: { label: 'COUNTER 1', count: 5 },
        2: { label: 'COUNTER 2', count: 10 },
        3: { label: 'COUNTER 3', count: 15 },
      },
    }

    // when ... we select for CounterList component's props
    // then ... should return all expected keys
    const result = selector(state)
    expect(keys(result)).toEqual([
      'counters',
    ])
  })
})
