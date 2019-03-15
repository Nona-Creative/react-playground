import { createSelector } from 'reselect'
import * as R from 'ramda'

import CharacterEquipmentSelector from '../CharacterEquipment/CharacterEquipment.selector'
import { itemTypeEquipmentSlots } from '../CharacterEquipment/CharacterEquipment.constants'

const updateAllowEquip = characterEquipment => item => {
  const itemTypeSlots = R.prop(R.prop('type', item), itemTypeEquipmentSlots)
  const itemTypeHasSlots = R.any(R.compose(
    R.isNil,
    R.flip(R.prop)(characterEquipment),
  ))(itemTypeSlots)
  return {
    ...item,
    allowEquip: itemTypeHasSlots,
  }
}

const selector = createSelector(
  [
    R.prop('selectedCharacterId'),
    R.prop('items'),
    CharacterEquipmentSelector,
  ],
  (selectedCharacterId, items, { characterEquipment }) => ({
    selectedCharacterId,
    items: R.compose(
      R.map(updateAllowEquip(characterEquipment)),
      R.filter(R.propEq('characterId', null)),
    )(items),
    characterEquipment,
  })
)

export default selector
