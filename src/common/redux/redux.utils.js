import * as R from 'ramda'

export const endpoint = (reducers, defaultState = null) => (
  (currentState, action) => {
    const state = currentState == null ? defaultState : currentState
    return R.has(action.type, reducers)
      ? reducers[action.type](state, action)
      : state
  }
)
