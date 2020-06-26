import { createReducer } from '@reduxjs/toolkit'

//---------------------------------
// actions
//---------------------------------

export const SELECT_COUNTER = '[counter] select'
export const selectCounter = id => ({ type: SELECT_COUNTER, payload: { id } })

//---------------------------------
// reducers
//---------------------------------

const setSelectedCounter = (state, { payload }) => {
  const { id } = payload
  return parseInt(id, 10)
}

//---------------------------------
// reducer
//---------------------------------

export const INITIAL_STATE = null

const reducer = createReducer(INITIAL_STATE, {
  [SELECT_COUNTER]: setSelectedCounter,
})

export default reducer
