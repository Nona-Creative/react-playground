import { combineReducers } from 'redux'

import {
  counters,
  selectedCounter,
} from '../../modules/Counter'

export default combineReducers({
  counters,
  selectedCounter,
})
