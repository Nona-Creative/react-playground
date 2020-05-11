import API from '../api'

import {
  countersInitFlow,
  apiGetCountersFlow,
  setCountersFlow,
} from '../../modules/Counter'

export default [
  countersInitFlow,
  apiGetCountersFlow(API),
  setCountersFlow,
]
