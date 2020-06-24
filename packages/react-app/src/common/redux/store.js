import { applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers'
import middleware from './middleware'

export const history = createBrowserHistory()

export default createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      ...middleware,
    ),
  ),
)
