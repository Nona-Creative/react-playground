import { createSelector } from 'reselect'
import { prop } from 'ramda'

import { denormalize } from '../../common/utils/data'

export const countersSelector = createSelector(
  [
    prop('counters'),
  ],
  counters => ({
    counters: denormalize('id')(counters),
  }),
)
