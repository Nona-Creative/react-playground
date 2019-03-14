import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRoutes } from 'redux-first-router'

import { routePaths as appRoutePaths } from '../../modules/App/App.routes'

import { reducer as app } from '../../modules/App'
import { reducer as characters } from '../../modules/Characters'
import { reducer as selectedCharacterId } from '../../modules/SelectedCharacter'
import { reducer as characterAttributes } from '../../modules/CharacterAttributes'
import { reducer as items } from '../../modules/Items'

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
  characters,
  selectedCharacterId,
  characterAttributes,
  items,
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
