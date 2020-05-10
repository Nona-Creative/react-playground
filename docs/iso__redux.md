## Redux

### src/common/redux/store.js

Here we add a Redux store ....

```javascript
import { createStore } from 'redux'

import rootReducer from './reducers'

export default createStore(rootReducer)
```

### src/common/redux/reducers.js

Here wse add our root reducers ...

```javascript
import { combineReducers } from 'redux'

import { counter } from '../../modules/Counter'

export default combineReducers({ counter })
```

### src/index.js

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

src/modules/Counter/Counter.container.js

```javascript
import { connect } from 'react-redux'
import { applySpec, path } from 'ramda'

import Component from './Counter.component'
import { incrementCounter, decrementCounter } from './Counter.reducer'

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

src/modules/Counter/Counter.reducer.test.js

```javascript
import SUT, {
  decrementCounter,
  incrementCounter,
} from './Counter.reducer'

describe('modules/Counter/Counter.reducer', () => {
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

src/modules/Counter/Counter.reducer.js

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

