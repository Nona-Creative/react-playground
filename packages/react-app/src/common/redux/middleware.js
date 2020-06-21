import API from '../api'
import { APP_INIT } from '../../modules/App'

import {
  countersInitFlow,
  apiGetCountersFlow,
  setCountersFlow,
} from '../../modules/Counter'

export default [
  countersInitFlow({ APP_INIT }),
  apiGetCountersFlow({ API }),
  setCountersFlow,
]
