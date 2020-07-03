# Redux :: Middleware :: Custom Async

## Design

### Actions

-   `API_GET_COUNTERS` : signals intention to retrieve counters from API (command action)
-   `API_GET_COUNTERS_SUCCESS` : notifies us that retrieve counters from API succeeded (notification action)
-   `API_GET_COUNTERS_FAILURE` : notifies us that retrieve counters from API failed (notification action)
-   `SET_COUNTERS` : signals intention to update counters state (documentation action)

### Middleware

##### counters init `countersInitFlow`

> starts the API get counters flow
> on App initialization

on `APP_INIT` dispatches `apiGetCounters`

##### API get counters `apiGetCountersFlow`

> gets counters from API
> and either succeeds with the response data
> or fails with the received error message

on `API_GET_COUNTERS` fetches counters from API and dispatches either `apiGetCountersSuccess` 
or `apiGetCountersFailure` with API response or error (respectively)

##### counters init `setCountersFlow`

> signals intention to update state
> with list of counters returned from API

on `API_GET_COUNTERS_SUCCESS` dispatches `setCounters` with action payload

## Code

### Common

###### Store & Reducers

> Our common store and reducer files are unchanged

-   `src/common/redux/store.js`
-   `src/common/redux/reducers.js`

###### Middleware

> We have just registered our custom Feature Module level middleware in common middleware

`src/common/redux/middleware.js`

```javascript
import API from '../api'
import { APP_INIT } from '../../modules/App'

import {
  countersInitFlow,
  apiGetCountersFlow,
  setCountersFlow,
} from '../../modules/Counter'

export default [
  countersInitFlow({ APP_INIT }),
  apiGetCountersFlow({ API }),
  setCountersFlow,
]
```

### Feature Modules

###### Actions

`src/modules/Counter/counters.reducer.js`

```javascript
export const API_GET_COUNTERS = '[counter] API get counters'
export const API_GET_COUNTERS_SUCCESS = '[counter] API get counters success'
export const API_GET_COUNTERS_FAILURE = '[counter] API get counters failure'
export const apiGetCounters = () => ({ type: API_GET_COUNTERS })
export const apiGetCountersSuccess = data => ({ type: API_GET_COUNTERS_SUCCESS, payload: data })
export const apiGetCountersFailure = message => ({ type: API_GET_COUNTERS_FAILURE, payload: { message } })

export const SET_COUNTERS = '[counter] set counters'
export const setCounters = counters => ({ type: SET_COUNTERS, payload: { counters } })
```

###### Reducers

`src/modules/Counter/counters.reducer.js`

```javascript
const overwriteCounters = (state, { payload }) => {
  const { counters } = payload
  return normalize('id')(counters)
}
```

```javascript
const reducer = createReducer(INITIAL_STATE, {
  [INCREMENT_COUNTER]: incrementCount,
  [DECREMENT_COUNTER]: decrementCount,
  [SET_COUNTERS]: overwriteCounters,
})
```

`src/modules/Counter/counters.reducer.test.js`

```javascript
  describe('overwriteCounters', () => {
    it('should overwrite counters using provided list of counters', () => {
      // given ... no existing counters
      const state = {}

      // when ... we set counters from the following list of counters
      const counters = [
        { id: 1, label: 'COUNTER 1', count: 5 },
        { id: 2, label: 'COUNTER 2', count: 10 },
        { id: 3, label: 'COUNTER 3', count: 15 },
      ]
      const action = setCounters(counters)
      const result = SUT(state, action)

      // then ... should normalize and set counters as expected
      expect(result).toEqual({
        1: { label: 'COUNTER 1', count: 5 },
        2: { label: 'COUNTER 2', count: 10 },
        3: { label: 'COUNTER 3', count: 15 },
      })
    })
  })
```

###### Middleware

`src/modules/Counter/counters.middleware.js`

```javascript
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

export const countersInitFlow = ({ APP_INIT }) => ({ dispatch }) => next => (action) => {
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

export const apiGetCountersFlow = ({ API }) => ({ dispatch }) => next => (action) => {
  next(action)

  const { type } = action
  if (type === API_GET_COUNTERS) {
    API
      .getCounters()
      .then((response) => {
        dispatch(apiGetCountersSuccess(response))
      })
      .catch((e) => {
        dispatch(apiGetCountersFailure(e.message))
      })
  }
}

//---------------------------------
// counters init
// ... signals intention to update state
// ... with list of counters returned from API
//---------------------------------

export const setCountersFlow = ({ dispatch }) => next => (action) => {
  next(action)

  const { type, payload } = action
  if (type === API_GET_COUNTERS_SUCCESS) {
    dispatch(setCounters(payload))
  }
}
```

`src/modules/Counter/counters.middleware.test.js`

```javascript
import sinon from 'sinon'
import Bluebird from 'bluebird'

import {
  apiGetCounters,
  apiGetCountersSuccess,
  apiGetCountersFailure,
  setCounters,
} from './counters.reducer'
import * as SUT from './counters.middleware'

describe('modules/Counter/counters.reducer', () => {
  let sandbox = null

  beforeEach(async () => {
    sandbox = await sinon.createSandbox()
  })

  afterEach(async () => {
    await sandbox.restore()
  })

  describe('countersInitFlow', () => {
    it('should starts the API get counters flow on App initialization', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()

      // when ... the App initializes
      const APP_INIT = '[app] init'
      const action = { type: APP_INIT }
      const middleware = SUT.countersInitFlow({ APP_INIT })
      middleware(store)(nextStub)(action)

      // then ... should start the API get counters flow
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, apiGetCounters('API DATA'))
    })
  })

  describe('apiGetCountersFlow', () => {
    it('should succeed with API data', async () => {
      // given
      // ... store methods will behave as expected
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()
      // ... API request to retrieve counters will respond with success
      const getCountersStub = sandbox.stub().resolves('API DATA')
      const apiStub = { getCounters: getCountersStub }

      // when ... we get counters from the API
      const action = apiGetCounters()
      const middleware = SUT.apiGetCountersFlow({ API: apiStub })
      middleware(store)(nextStub)(action)

      await Bluebird.delay(10)

      // then ... should succeed with API data
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(getCountersStub)
      sinon.assert.calledWithExactly(dispatchStub, apiGetCountersSuccess('API DATA'))
    })

    it('should fail with error message', async () => {
      // given
      // ... store methods will behave as expected
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()
      // ... API request to retrieve counters will fail with message
      const getCountersStub = sandbox.stub().rejects(new Error('ERROR MESSAGE'))
      const apiStub = { getCounters: getCountersStub }

      // when ... we get counters from the API
      const action = apiGetCounters()
      const middleware = SUT.apiGetCountersFlow({ API: apiStub })
      middleware(store)(nextStub)(action)

      await Bluebird.delay(10)

      // then ... should succeed with API data
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(getCountersStub)
      sinon.assert.calledWithExactly(dispatchStub, apiGetCountersFailure('ERROR MESSAGE'))
    })
  })

  describe('setCountersFlow', () => {
    it('should signals intention to update state with list of counters returned from API', () => {
      const dispatchStub = sandbox.stub()
      const store = { dispatch: dispatchStub }
      const nextStub = sandbox.stub()

      // when ... we successfully get counters from API
      const action = apiGetCountersSuccess('COUNTERS')
      const middleware = SUT.setCountersFlow
      middleware(store)(nextStub)(action)

      // then ... should start the API get counters flow
      sinon.assert.calledWithExactly(nextStub, action)
      sinon.assert.calledWithExactly(dispatchStub, setCounters('COUNTERS'))
    })
  })
})
```

###### Middleware

