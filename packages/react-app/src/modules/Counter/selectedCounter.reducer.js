import { createReducer } from '@reduxjs/toolkit'

//---------------------------------
// actions
//---------------------------------

export const SET_SELECTED_COUNTER = '[counter] set selected counter'
export const setSelectedCounter = id => ({ type: SET_SELECTED_COUNTER, payload: { id } })

//---------------------------------
// reducers
//---------------------------------

const setSelected = (state, { payload }) => {
  const { id } = payload
  return parseInt(id, 10)
}

//---------------------------------
// reducer
//---------------------------------

export const INITIAL_STATE = null

const reducer = createReducer(INITIAL_STATE, {
  [SET_SELECTED_COUNTER]: setSelected,
})

export default reducer
