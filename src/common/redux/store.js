import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRoutes } from 'redux-first-router'

import { routePaths as appRoutePaths } from '../../modules/App/App.routes'

import { reducer as app } from '../../modules/App'

const routePaths = {
  ...appRoutePaths,
}

const {
  reducer: location,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
  initialDispatch,
} = connectRoutes(routePaths, { initialDispatch: false })

// reducers
const reducer = combineReducers({
  location,
  app,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [
  routerMiddleware,
]

const configureStore = initialState => {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      routerEnhancer,
      applyMiddleware(...middleware)
    ),
  )

  initialDispatch()

  return store
}

export default configureStore
