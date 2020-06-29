import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers'
import middleware from './middleware'
import history from './history'

export default createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      ...middleware,
    ),
  ),
)
