import * as R from 'ramda'

import { endpoint } from '../../common/redux/redux.utils'
import items from './Items.json'
import itemsCharacterAttributes from './ItemsCharacterAttributes.json'

//---------------------------------
// actions & action creators
//---------------------------------

export const EQUIP_ITEM = 'app/Items/EQUIP_ITEM'
export const equipItem = (characterId, itemId) => ({ type: EQUIP_ITEM, payload: { characterId, itemId } })

export const UNEQUIP_ITEM = 'app/Items/UNEQUIP_ITEM'
export const unequipItem = (itemId) => ({ type: UNEQUIP_ITEM, payload: { itemId } })

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
  return R.map(x => (
    R.mergeDeepRight(x, x.id === itemId ? { characterId } : {})
  ))(state)
}

const disassociateItemWithCharacter = (state, action) => {
  const { itemId } = R.prop('payload', action)
  return R.map(x => (
    R.mergeDeepRight(x, x.id === itemId ? { characterId: null } : {})
  ))(state)
}

const reducers = {
  [EQUIP_ITEM]: associateItemWithCharacter,
  [UNEQUIP_ITEM]: disassociateItemWithCharacter,
}

export default endpoint(reducers, INITIAL_STATE)
