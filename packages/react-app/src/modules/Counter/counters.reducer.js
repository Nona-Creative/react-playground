import { createReducer } from '@reduxjs/toolkit'
import { subtract, add, __, lensPath, over } from 'ramda'

//---------------------------------
// actions
//---------------------------------

export const INCREMENT_COUNTER = '[counter] increment'
export const incrementCounter = (id, amount) => ({ type: INCREMENT_COUNTER, payload: { id, amount } })

export const DECREMENT_COUNTER = '[counter] decrement'
export const decrementCounter = (id, amount) => ({ type: DECREMENT_COUNTER, payload: { id, amount } })

export const SELECT_COUNTER = '[counter] select'
export const selectCounter = id => ({ type: SELECT_COUNTER, payload: { id } })

export const NAVIGATE_TO_COUNTERS = '[counter] navigate to counter list'
export const navigateToCounters = () => ({ type: NAVIGATE_TO_COUNTERS })

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

//---------------------------------
// reducer
//---------------------------------

export const INITIAL_STATE = {
  1: { label: 'COUNTER 1', count: 5 },
  2: { label: 'COUNTER 2', count: 10 },
  3: { label: 'COUNTER 3', count: 15 },
}

const reducer = createReducer(INITIAL_STATE, {
  [INCREMENT_COUNTER]: incrementCount,
  [DECREMENT_COUNTER]: decrementCount,
})

export default reducer
