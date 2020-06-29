import { push } from 'connected-react-router'
import { LOCATION_CHANGE } from 'connected-react-router/lib/actions'

import {
  selectCounterFlow,
  navigateToCountersFlow,
  setSelectedCounterFlow,
} from '../../modules/Counter/counter.middleware'

export default [
  selectCounterFlow(push),
  navigateToCountersFlow(push),
  setSelectedCounterFlow({ LOCATION_CHANGE }),
]
