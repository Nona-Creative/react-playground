import { prop } from 'ramda'

import {
  NAVIGATE_TO_OVERVIEW,
  SELECT_COUNTER,
} from './counters.reducer'

//---------------------------------
// counters select
// ... signals intention to select a counter
// ... with a counter id
//---------------------------------

export const selectCounterFlow = push => ({ dispatch }) => next => (action) => {
  next(action)

  const { type, payload } = action
  if (type === SELECT_COUNTER) {
    const id = prop('id', payload)
    const newUrl = `/counter/${id}`
    dispatch(push(newUrl))
  }
}

//---------------------------------
// to overview
// ... signals intention to visit the counters overview
//---------------------------------

export const navigateToOverviewFlow = push => ({ dispatch }) => next => (action) => {
  next(action)

  const { type } = action
  if (type === NAVIGATE_TO_OVERVIEW) {
    const newUrl = '/'
    dispatch(push(newUrl))
  }
}
