import { endpoint } from '../../common/redux/redux.utils'
import characterAttributes from './CharacterAttributes.json'

//---------------------------------
// actions & action creators
//---------------------------------

//---------------------------------
// reducers
//---------------------------------

export const INITIAL_STATE = characterAttributes

const reducers = {}

export default endpoint(reducers, INITIAL_STATE)
