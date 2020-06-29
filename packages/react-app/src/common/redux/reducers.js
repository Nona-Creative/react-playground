import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import {
  counters,
  selectedCounter,
} from '../../modules/Counter'

export default history => combineReducers({
  router: connectRouter(history),
  counters,
  selectedCounter,
})
