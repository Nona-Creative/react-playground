import {
  API_GET_COUNTERS,
  API_GET_COUNTERS_SUCCESS,
  apiGetCounters,
  apiGetCountersSuccess,
  apiGetCountersFailure,
  setCounters,
} from './counters.reducer'

//---------------------------------
// counters init
// ... starts the API get counters flow
// ... on App initialization
//---------------------------------

export const countersInitFlow = ({ APP_INIT }) => ({ dispatch }) => next => action => {
  next(action)

  const { type } = action
  if (type === APP_INIT) {
    dispatch(apiGetCounters())
  }
}

//---------------------------------
// API get counters
// ... gets counters from API
// ... and either succeeds with the response data
// ... or fails with the received error message
//---------------------------------

export const apiGetCountersFlow = ({ API }) => ({ dispatch }) => next => action => {
  next(action)

  const { type } = action
  if (type === API_GET_COUNTERS) {
    API
      .getCounters()
      .then(response => {
        dispatch(apiGetCountersSuccess(response))
      })
      .catch(e => {
        dispatch(apiGetCountersFailure(e.message))
      })
  }
}

//---------------------------------
// counters init
// ... signals intention to update state
// ... with list of counters returned from API
//---------------------------------

export const setCountersFlow = ({ dispatch }) => next => action => {
  next(action)

  const { type, payload } = action
  if (type === API_GET_COUNTERS_SUCCESS) {
    dispatch(setCounters(payload))
  }
}
