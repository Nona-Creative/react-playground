# Redux :: Middleware

## Design

### Redux module structure

> Goal is a structure that separates reducer, store and middleware code as much as possible

```text
+-- common
    +-- redux
        +-- middleware.js
        +-- reducers.js
        +-- store.js
```

## Code

###### Store

src/common/redux/store.js

```javascript
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'
import middleware from './middleware'

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
)
```

###### Reducers

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

###### Middleware

src/common/redux/middleware.js

```javascript
export default []
```

