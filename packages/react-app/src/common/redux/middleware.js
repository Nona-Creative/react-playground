import { push } from 'connected-react-router'
import { LOCATION_CHANGE } from 'connected-react-router/lib/actions'

import {
  selectCounterFlow,
  navigateToCounterFlow,
  navigateToCountersFlow,
} from '../../modules/Counter/counter.middleware'

export default [
  selectCounterFlow({ LOCATION_CHANGE }),
  navigateToCountersFlow(push),
  navigateToCounterFlow(push),
]
