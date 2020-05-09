import { createReducer } from '@reduxjs/toolkit'

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

const incrementCount = (state, { payload }) => state + payload

const decrementCount = (state, { payload }) => state - payload

//---------------------------------
// reducer
//---------------------------------

export const INITIAL_STATE = 0

const counterReducer = createReducer(INITIAL_STATE, {
  [INCREMENT_COUNTER]: incrementCount,
  [DECREMENT_COUNTER]: decrementCount,
})

export default counterReducer
