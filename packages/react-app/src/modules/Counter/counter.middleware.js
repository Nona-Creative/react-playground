import { prop, includes, path } from 'ramda'

import { getCounterIdFromPayload } from './counter.utils'
import {
  NAVIGATE_TO_COUNTERS, NAVIGATE_TO_SELECTED_COUNTER, selectCounter,
} from './counters.reducer'

//---------------------------------
// navigate to single counter
//---------------------------------

export const navigateToCounterFlow = navigate => ({ dispatch }) => next => (action) => {
  next(action)

  const { type, payload } = action
  if (type === NAVIGATE_TO_SELECTED_COUNTER ) {
    const id = prop('id', payload)
    const newUrl = `/counter/${id}`
    dispatch(navigate(newUrl))
  }
}

//---------------------------------
// navigate to counters
//---------------------------------

export const navigateToCountersFlow = navigate => ({ dispatch }) => next => (action) => {
  next(action)

  const { type } = action
  if (type === NAVIGATE_TO_COUNTERS) {
    const newUrl = '/'
    dispatch(navigate(newUrl))
  }
}

//---------------------------------
// select counter from url
//---------------------------------

export const selectCounterFlow = ({ LOCATION_CHANGE }) => ({ dispatch }) => next => (action) => {
  next(action)

  const { type, payload } = action
  if (type === LOCATION_CHANGE && includes('/counter/', path(['location', 'pathname'], payload))) {
    const counterId = getCounterIdFromPayload(payload)
    dispatch(selectCounter(counterId))
  }
}
