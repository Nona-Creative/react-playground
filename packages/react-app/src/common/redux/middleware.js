import { push } from 'connected-react-router'

import {
  selectCounterFlow,
  navigateToCounterFlow,
  navigateToCountersFlow,
} from '../../modules/Counter/counter.middleware'

export default [
  selectCounterFlow,
  navigateToCountersFlow(push),
  navigateToCounterFlow(push),
]
