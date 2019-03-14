import { createSelector } from 'reselect'
import * as R from 'ramda'

import { equipmentSlotItemTypes } from './CharacterEquipment.constants'

const selector = createSelector(
  [
    R.prop('selectedCharacterId'),
    R.prop('items'),
  ],
  (selectedCharacterId, items) => {
    if (selectedCharacterId === -1) {
      return {}
    }

    // get items equipped by character
    const itemsEquippedByCharacter = R.compose(
      R.propOr([], selectedCharacterId),
      R.groupBy(R.prop('characterId')),
    )(items)

    // get equipped items by each equipment slot
    const itemsByEquipmentSlot = R.mapObjIndexed(xs => (
      R.filter(R.pipe(
        R.prop('type'),
        R.flip(R.includes)(xs),
      ))(itemsEquippedByCharacter)
    ))(equipmentSlotItemTypes)

    // restructure according to component's requirements
    return {
      characterEquipment: R.applySpec({
        weapon: R.pipe(R.prop('weapons'), R.propOr(null, 0)),
        shield: R.pipe(R.prop('shields'), R.propOr(null, 0)),
        accessory1: R.pipe(R.prop('accessories'), R.propOr(null, 0)),
        accessory2: R.pipe(R.prop('accessories'), R.propOr(null, 1)),
        attire: R.pipe(R.prop('attire'), R.propOr(null, 0)),
      })(itemsByEquipmentSlot),
    }
  }
)

export default selector
