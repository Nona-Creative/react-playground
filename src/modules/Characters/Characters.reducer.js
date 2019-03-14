import { endpoint } from '../../common/redux/redux.utils'
import characters from './Characters.json'

//---------------------------------
// actions & action creators
//---------------------------------

export const SELECT_CHARACTER = 'app/Characters/SELECT_CHARACTER'
export const selectCharacter = id => ({ type: SELECT_CHARACTER, payload: { id } })

//---------------------------------
// reducers
//---------------------------------

export const INITIAL_STATE = characters

const reducers = {}

export default endpoint(reducers, INITIAL_STATE)
