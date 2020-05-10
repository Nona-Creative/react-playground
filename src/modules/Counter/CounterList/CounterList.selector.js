import { createSelector } from 'reselect'

import { countersSelector } from '../counters.selectors'

export default createSelector([countersSelector], ({ counters }) => ({ counters }))
