import { createReducer } from '@reduxjs/toolkit'
import { subtract, add, __, lensPath, over } from 'ramda'

import { normalize } from '../../common/utils/data'

//---------------------------------
// actions
//---------------------------------

export const INCREMENT_COUNTER = '[counter] increment'
export const incrementCounter = (id, amount) => ({ type: INCREMENT_COUNTER, payload: { id, amount } })

export const DECREMENT_COUNTER = '[counter] decrement'
export const decrementCounter = (id, amount) => ({ type: DECREMENT_COUNTER, payload: { id, amount } })

export const API_GET_COUNTERS = '[counter] API get counters'
export const API_GET_COUNTERS_SUCCESS = '[counter] API get counters success'
export const API_GET_COUNTERS_FAILURE = '[counter] API get counters failure'
export const apiGetCounters = () => ({ type: API_GET_COUNTERS })
export const apiGetCountersSuccess = data => ({ type: API_GET_COUNTERS_SUCCESS, payload: data })
export const apiGetCountersFailure = message => ({ type: API_GET_COUNTERS_FAILURE, payload: { message } })

export const SET_COUNTERS = '[counter] set counters'
export const setCounters = (counters) => ({ type: SET_COUNTERS, payload: { counters } })

//---------------------------------
// reducers
//---------------------------------

const incrementCount = (state, { payload }) => {
  const { id, amount } = payload
  return over(lensPath([id, 'count']), add(__, amount), state)
}

const decrementCount = (state, { payload }) => {
  const { id, amount } = payload
  return over(lensPath([id, 'count']), subtract(__, amount), state)
}

const overwriteCounters = (state, { payload }) => {
  const { counters } = payload
  return normalize('id')(counters)
}

//---------------------------------
// reducer
//---------------------------------

export const INITIAL_STATE = {}

const reducer = createReducer(INITIAL_STATE, {
  [INCREMENT_COUNTER]: incrementCount,
  [DECREMENT_COUNTER]: decrementCount,
  [SET_COUNTERS]: overwriteCounters,
})

export default reducer
