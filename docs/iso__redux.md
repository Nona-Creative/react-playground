# Redux

## Design

### feature module structure

> Goal is a structure that allows as much decoupling between feature modules as possible

```text
+-- modules
    +-- App
    +-- Counter
        +-- CounterDetail ... detail view
        +-- CounterSummary ... summary view (used in list view)
        +-- Counters ... list view
        +-- ... common files
        +-- ... redux files
```

### Redux state

> On top of feature module goals stated above, goal is also Redux reducer filenames that correspond to the Redux state tree

tree

```text
 - counters : { [id]: { label, count } }
 - selectedCounter : id
```

files

```text
+-- modules
    +-- Counter
        +-- counters.reducer.js
        +-- selectedCounter.reducer.js
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

import {
  counters,
  selectedCounter,
} from '../../modules/Counter'

export default combineReducers({
  counters,
  selectedCounter,
})
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

src/modules/Counter/CounterList/CounterList.container.js

```javascript
import { connect } from 'react-redux'
import { pipe, pick, evolve } from 'ramda'

import { denormalize } from '../../../common/utils/data'
import { selectCounter } from '../selectedCounter.reducer'
import Component from './CounterList.component'

const mapStateToProps = pipe(
  pick(['counters']),
  evolve({
    counters: denormalize('id'),
  }),
)

const mapDispatchToProps = dispatch => ({
  onSelectCounter: id => dispatch(selectCounter(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
```

src/modules/Counter/CounterDetail/CounterDetail.container.js

```javascript
import { connect } from 'react-redux'
import { prop, path } from 'ramda'

import Component from './CounterDetail.component'
import { incrementCounter, decrementCounter } from '../counters.reducer'

const mapStateToProps = (state) => {
  const selectedCounter = prop('selectedCounter', state)
  const count = path(['counters', selectedCounter, 'count'], state)
  const label = path(['counters', selectedCounter, 'label'], state)
  return {
    counterId: selectedCounter,
    count,
    label,
  }
}

const mapDispatchToProps = dispatch => ({
  onIncrement: (counterId, amount) => dispatch(incrementCounter(counterId, amount)),
  onDecrement: (counterId, amount) => dispatch(decrementCounter(counterId, amount)),
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

describe('modules/Counter/counters.reducer', () => {
  describe('incrementCounter', () => {
    it('should increment counter count by provided amount', () => {
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

  describe('decrementCounter', () => {
    it('should decrement counter count by provided amount', () => {
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

export const INCREMENT_COUNTER = '[counter] increment'
export const incrementCounter = (id, amount) => ({ type: INCREMENT_COUNTER, payload: { id, amount } })

export const DECREMENT_COUNTER = '[counter] decrement'
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

export const INITIAL_STATE = {
  1: { label: 'COUNTER 1', count: 5 },
  2: { label: 'COUNTER 2', count: 10 },
  3: { label: 'COUNTER 3', count: 15 },
}

const reducer = createReducer(INITIAL_STATE, {
  [INCREMENT_COUNTER]: incrementCount,
  [DECREMENT_COUNTER]: decrementCount,
})

export default reducer
```

src/modules/Counter/selectedCounter.reducer.test.js

```javascript
import SUT, {
  selectCounter,
} from './selectedCounter.reducer'

describe('modules/Counter/selectedCounter.reducer', () => {
  describe('selectCounter', () => {
    it('should set selected counter to the provided id', () => {
      // given ... no counter is currently selected
      const state = null

      // when ... we select counter 3
      const action = selectCounter('3')
      const result = SUT(state, action)

      // then ... should set selected counter to 3
      expect(result).toEqual(3)
    })
  })
})
```

src/modules/Counter/selectedCounter.reducer.js

```javascript
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
```

