import { createReducer } from '@reduxjs/toolkit'
import { subtract, add, __, lensPath, over } from 'ramda'

//---------------------------------
// actions
//---------------------------------

export const INCREMENT_COUNTER = '[counter] increment-counter'
export const incrementCounter = (id, amount) => ({ type: INCREMENT_COUNTER, payload: { id, amount } })

export const DECREMENT_COUNTER = '[counter] decrement-counter'
export const decrementCounter = (id, amount) => ({ type: DECREMENT_COUNTER, payload: { id, amount } })

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

export const INITIAL_STATE = {}

const countersReducer = createReducer(INITIAL_STATE, {
  [INCREMENT_COUNTER]: incrementCount,
  [DECREMENT_COUNTER]: decrementCount,
})

export default countersReducer
