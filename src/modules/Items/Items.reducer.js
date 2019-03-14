import { endpoint } from '../../common/redux/redux.utils'
import items from './Items.json'
import itemsCharacterAttributes from './ItemsCharacterAttributes.json'
import * as R from 'ramda'

//---------------------------------
// actions & action creators
//---------------------------------

export const SELECT_ITEM = 'app/Items/SELECT_ITEM'
export const selectItem = ({ id }) => ({ type: SELECT_ITEM, payload: { id } })

export const EQUIP_ITEM = 'app/Items/EQUIP_ITEM'
export const EQUIP_ITEM_SUCCESS = 'app/Items/EQUIP_ITEM_SUCCESS'
export const EQUIP_ITEM_FAILURE = 'app/Items/EQUIP_ITEM_FAILURE'
export const equipItem = (characterId, itemId) => ({ type: EQUIP_ITEM, payload: { characterId, itemId } })
export const equipItemSuccess = (id) => ({ type: EQUIP_ITEM_SUCCESS, payload: id })
export const equipItemFailure = (id) => ({ type: EQUIP_ITEM_FAILURE, payload: id })

export const UNEQUIP_ITEM = 'app/Items/UNEQUIP_ITEM'
export const UNEQUIP_ITEM_SUCCESS = 'app/Items/UNEQUIP_ITEM_SUCCESS'
export const UNEQUIP_ITEM_FAILURE = 'app/Items/UNEQUIP_ITEM_FAILURE'
export const unequipItem = (id) => ({ type: UNEQUIP_ITEM, payload: id })
export const unequipItemSuccess = (id) => ({ type: UNEQUIP_ITEM_SUCCESS, payload: id })
export const unequipItemFailure = (id) => ({ type: UNEQUIP_ITEM_FAILURE, payload: id })

//---------------------------------
// reducers
//---------------------------------

const itemsAttributesByItemId = R.groupBy(R.prop('itemId'))(itemsCharacterAttributes)
export const INITIAL_STATE = R.map(x => ({
  ...x,
  characterAttributeModifiers: R.prop(x.id)(itemsAttributesByItemId),
}))(items)

const associateItemWithCharacter = (state, action) => {
  const { characterId, itemId } = R.prop('payload', action)
  // return R.map(x => R.mergeDeepRight(x, x.id === itemId ? { characterId } : {}))(state)
  return R.map(x => {
    console.log(x)
    console.log(itemId)
    return R.mergeDeepRight(x, x.id === itemId ? { characterId } : {})
  })(state)
}

const reducers = {
  [EQUIP_ITEM]: associateItemWithCharacter,
}

export default endpoint(reducers, INITIAL_STATE)
