import { endpoint } from '../../common/redux/redux.utils'
import { SELECT_CHARACTER } from '../Characters/Characters.reducer'

//---------------------------------
// reducers
//---------------------------------

export const INITIAL_STATE = -1

const setSelectedCharacterId = (state, action) => {
  return action.payload.id
}

const reducers = {
  [SELECT_CHARACTER]: setSelectedCharacterId,
}

export default endpoint(reducers, INITIAL_STATE)
