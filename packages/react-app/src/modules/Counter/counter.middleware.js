import { prop, path, includes } from 'ramda'

import { getLastParamFromRouterState } from '../../common/redux/router.utils'
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
    dispatch(setSelectedCounter(id))
    dispatch(navigate(`/counter/${id}`))
  }
}

//---------------------------------
// set selected counter
//---------------------------------

export const setSelectedCounterFlow = ({ LOCATION_CHANGE }) => ({ dispatch }) => next => (action) => {
  next(action)

  const { type, payload } = action

  if (
    type === LOCATION_CHANGE &&
    prop('isFirstRendering', payload) && 
    includes('/counter/', path(['location', 'pathname'], payload))
  ) {
    const id = getLastParamFromRouterState(payload)
    dispatch(setSelectedCounter(id))
  }
}
