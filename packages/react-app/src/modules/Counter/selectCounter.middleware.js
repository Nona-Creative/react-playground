import { prop } from 'ramda'

import {
  SELECT_COUNTER,
} from './selectCounter.reducer'

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
