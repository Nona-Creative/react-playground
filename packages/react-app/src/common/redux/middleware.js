import { push } from 'connected-react-router'

import {
  selectCounterFlow,
} from '../../modules/Counter/selectCounter.middleware'

export default [
  selectCounterFlow(push),
]
