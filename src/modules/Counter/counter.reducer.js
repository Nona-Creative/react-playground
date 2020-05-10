import { createReducer } from '@reduxjs/toolkit'
import { evolve, subtract, add, __ } from 'ramda'

//---------------------------------
// actions
//---------------------------------

export const INCREMENT_COUNTER = '[counter] increment-counter'
export const incrementCounter = amount => ({ type: INCREMENT_COUNTER, payload: amount })

export const DECREMENT_COUNTER = '[counter] decrement-counter'
export const decrementCounter = amount => ({ type: DECREMENT_COUNTER, payload: amount })

//---------------------------------
// reducers
//---------------------------------

const incrementCount = (state, { payload }) => evolve({
  count: add(__, payload),
}, state)

const decrementCount = (state, { payload }) => evolve({
  count: subtract(__, payload),
}, state)

//---------------------------------
// reducer
//---------------------------------

export const INITIAL_STATE = {
  count: 0,
}

const counterReducer = createReducer(INITIAL_STATE, {
  [INCREMENT_COUNTER]: incrementCount,
  [DECREMENT_COUNTER]: decrementCount,
})

export default counterReducer
