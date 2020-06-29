import { prop } from 'ramda'

import { getCounterIdFromPayload } from './counter.utils'
import {
  NAVIGATE_TO_COUNTERS,
  SELECT_COUNTER,
} from './counters.reducer'
import { setSelectedCounter } from './selectedCounter.reducer'

//---------------------------------
// navigate to counters
//---------------------------------

export const navigateToCountersFlow = navigate => ({ dispatch }) => next => (action) => {
  next(action)

  const { type } = action
  if (type === NAVIGATE_TO_COUNTERS) {
    dispatch(navigate('/'))
  }
}

//---------------------------------
// select counter
//---------------------------------

export const selectCounterFlow = navigate => ({ dispatch }) => next => (action) => {
  next(action)

  const { type, payload } = action
  if (type === SELECT_COUNTER) {
    const id = prop('id', payload)
    dispatch(navigate(`/counter/${id}`))
  }
}

//---------------------------------
// set selected counter
//---------------------------------

export const setSelectedCounterFlow = ({ LOCATION_CHANGE }) => ({ dispatch }) => next => (action) => {
  next(action)

  const { type, payload } = action
  if (type === LOCATION_CHANGE) {
    const id = getCounterIdFromPayload(payload)
    dispatch(setSelectedCounter(id))
  }
}
