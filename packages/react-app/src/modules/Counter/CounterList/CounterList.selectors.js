import { createSelector } from 'reselect'

import { countersSelector } from '../counters.selectors'

export const CounterListComponentSelector = createSelector(
  [
    countersSelector,
  ],
  ({ counters }) => ({ counters }),
)
