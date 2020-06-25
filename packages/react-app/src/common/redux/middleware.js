import { push } from 'connected-react-router'

import {
  selectCounterFlow,
  navigateToCountersFlow,
} from '../../modules/Counter/counter.middleware'

export default [
  navigateToCountersFlow(push),
  selectCounterFlow(push),
]
