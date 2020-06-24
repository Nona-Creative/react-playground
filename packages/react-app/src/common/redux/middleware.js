import { push } from 'connected-react-router'

import {
  selectCounterFlow,
  navigateToOverviewFlow,
} from '../../modules/Counter/counter.middleware'

export default [
  navigateToOverviewFlow(push),
  selectCounterFlow(push),
]
