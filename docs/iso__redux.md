# Redux

## Design

### feature module structure

> goal is a structure that allows as much decoupling between feature modules as possible

```text
+-- modules
    +-- App
    +-- Counter
        +-- CounterDetail ... detail view
        +-- CounterSummary ... summary view (used in list view)
        +-- Counters ... list view
        +-- ... common files
```

### Redux state

> goal is a files structure that allows as much decoupling between feature modules as possible
> and filenames that correspond to state tree

tree

```text
 - selectedCounter : id
 - counters : { [id]: { count } }
```

files

```text
+-- modules
    +-- Counter
        +-- selectedCounter.reducer.js
        +-- counters.reducer.js
```

## Code

###### Store

src/common/redux/store.js

```javascript
import { createStore } from 'redux'

import rootReducer from './reducers'

export default createStore(rootReducer)
```

###### Root Reducer

src/common/redux/reducers.js

```javascript
import { combineReducers } from 'redux'

import { counters } from '../../modules/Counter'

export default combineReducers({ counters })
```

###### React changes

src/index.js

```javascript
import { Provider } from 'react-redux'

import store from './store'
```

```javascript
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
```

###### Counter module

src/modules/Counter/CounterDetail/CounterDetail.container.js

```javascript
import { connect } from 'react-redux'
import { prop, pathOr } from 'ramda'

import Component from './CounterDetail.component'
import { incrementCounter, decrementCounter } from '../counters.reducer'

const mapStateToProps = (state) => {
  const selectedCounter = prop('selectedCounter', state)
  const count = pathOr(null, ['counters', selectedCounter, 'count'], state)
  return { count }
}

const mapDispatchToProps = dispatch => ({
  onIncrement: n => dispatch(incrementCounter(n)),
  onDecrement: n => dispatch(decrementCounter(n)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
```

src/modules/Counter/counters.reducer.test.js

```javascript
import SUT, {
  decrementCounter,
  incrementCounter,
} from './counters.reducer'

describe('modules/Counter/counter.reducer', () => {
  describe('incrementCount', () => {
    it('should increment count by provided amount', () => {
      // given ... counter 2 currently has a count of 6
      const state = {
        1: { count: 0 },
        2: { count: 6 },
        3: { count: 0 },
      }

      // when ... we increment counter 2 by 3
      const id = 2
      const amount = 3
      const action = incrementCounter(id, amount)
      const result = SUT(state, action)

      // then ... should update it's count to 9
      const expected = {
        1: { count: 0 },
        2: { count: 9 },
        3: { count: 0 },
      }
      expect(result).toEqual(expected)
    })
  })

  describe('decrementCount', () => {
    it('should decrement count by provided amount', () => {
      // given ... counter 3 currently has a count of 6
      const state = {
        1: { count: 0 },
        2: { count: 0 },
        3: { count: 6 },
      }

      // when ... we decrement counter 3 by 1
      const id = 3
      const amount = 1
      const action = decrementCounter(id, amount)
      const result = SUT(state, action)

      // then ... should update count to 5
      expect(result).toEqual({
        1: { count: 0 },
        2: { count: 0 },
        3: { count: 5 },
      })
    })
  })
})
```

src/modules/Counter/counters.reducer.js

```javascript
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
```

