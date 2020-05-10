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

import { counter } from '../../modules/Counter'

export default combineReducers({ counter })
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
import { applySpec, path } from 'ramda'

import Component from './CounterDetail.component'
import { incrementCounter, decrementCounter } from '../counter.reducer'

const mapStateToProps = applySpec({
  count: path(['counter', 'count']),
})

const mapDispatchToProps = dispatch => ({
  onIncrement: n => dispatch(incrementCounter(n)),
  onDecrement: n => dispatch(decrementCounter(n)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
```

src/modules/Counter/counter.reducer.test.js

```javascript
import SUT, {
  decrementCounter,
  incrementCounter,
} from './counter.reducer'

describe('modules/Counter/counter.reducer', () => {
  describe('incrementCount', () => {
    it('should increment count by provided amount', () => {
      // given ... count is currently 6
      const state = { count: 6 }

      // when ... we increment by 3
      const result = SUT(state, incrementCounter(3))

      // then ... should update count to 9
      expect(result).toEqual({ count: 9 })
    })
  })

  describe('decrementCount', () => {
    it('should decrement count by provided amount', () => {
      // given ... count is currently 6
      const state = { count: 6 }

      // when ... we decrement counter by 5
      const result = SUT(state, decrementCounter(5))

      // then ... should update count to 5
      expect(result).toEqual({ count: 1 })
    })
  })
})
```

src/modules/Counter/counter.reducer.js

```javascript
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
```

