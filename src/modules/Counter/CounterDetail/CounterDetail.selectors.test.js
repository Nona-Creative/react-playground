import { CounterDetailComponentSelector } from './CounterDetail.selectors'

describe('modules/Counter/CounterDetail/CounterDetail.selector', () => {
  it('should select props required by CounterDetail component as expected', () => {
    // given ... 3 counters and a selected counter
    const state = {
      selectedCounter: '456',
      counters: {
        123: { label: 'COUNTER 1', count: 5 },
        456: { label: 'COUNTER 2', count: 10 },
        789: { label: 'COUNTER 3', count: 15 },
      },
    }

    // when ... we select for CounterDetail component's props
    // then ... should return as expected
    const result = CounterDetailComponentSelector(state)
    expect(result).toEqual({
      counterId: '456',
      count: 10,
      label: 'COUNTER 2',
    })
  })
})
