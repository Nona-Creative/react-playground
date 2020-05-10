import { createSelector } from 'reselect'
import { prop, path } from 'ramda'

export default createSelector(
  [
    prop('selectedCounter'),
    prop('counters'),
  ],
  (
    selectedCounter,
    counters,
  ) => ({
    counterId: selectedCounter,
    count: path([selectedCounter, 'count'], counters),
    label: path([selectedCounter, 'label'], counters),
  }),
)
