import { createSelector } from 'reselect'
import * as R from 'ramda'

import CharacterEquipmentSelector from '../CharacterEquipment/CharacterEquipment.selector'

const selector = createSelector(
  [
    R.prop('selectedCharacterId'),
    R.prop('items'),
    CharacterEquipmentSelector,
  ],
  (selectedCharacterId, items, { characterEquipment }) => ({
    selectedCharacterId,
    items: R.filter(R.propEq('characterId', null))(items),
    characterEquipment,
  })
)

export default selector
