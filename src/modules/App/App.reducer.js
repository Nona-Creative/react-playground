import { endpoint } from '../../common/redux/redux.utils'

//---------------------------------
// actions & action creators
//---------------------------------

//---------------------------------
// reducers
//---------------------------------

export const INITIAL_STATE = {
  title: 'REACT Playground',
}

const reducers = {}

export default endpoint(reducers, INITIAL_STATE)
