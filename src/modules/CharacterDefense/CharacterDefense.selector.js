import { createSelector } from 'reselect'
import * as R from 'ramda'

import * as DnDUtils from '../../common/utils/dnd.utils'
import {
  equipmentSlotItemTypes,
  armourTypesCharacterAbility,
} from '../CharacterEquipment/CharacterEquipment.constants'

const selector = createSelector(
  [
    R.pipe(R.nthArg(1), R.prop('selectedCharacter')),
    R.prop('characterAttributes'),
    R.prop('items'),
  ],
  (selectedCharacter, characterAttributes, items) => {
    // get armour equipped by character
    const selectedCharacterId = R.prop('id', selectedCharacter)
    const armourTypes = R.compose(R.flatten, R.values, R.pick(['shields', 'attire']))(equipmentSlotItemTypes)
    const armourEquippedByCharacter = R.pipe(
      R.groupBy(R.prop('characterId')),
      R.propOr([], selectedCharacterId),
      R.filter(x => R.includes(R.prop('type', x), armourTypes)),
    )(items)

    // get character ability value for armour type
    const firstArmourEquippedByCharacter = R.propOr(null, 0, armourEquippedByCharacter)
    const firstArmourTypeCharacterAbilityId = R.prop(
      R.prop('armourType', firstArmourEquippedByCharacter),
      armourTypesCharacterAbility,
    )
    const characterArmourTypeAbilityValue = R.pathOr(
      null,
      [firstArmourTypeCharacterAbilityId, 'value'],
      R.indexBy(R.prop('id'), R.prop('attributes', selectedCharacter)),
    )

    // get total armour value for character's armour equipment
    const totalEquippedArmourValue = R.compose(R.sum, R.pluck('armour'))(armourEquippedByCharacter)

    return {
      armours: armourEquippedByCharacter,
      // calculate armour class
      armourClass: R.isNil(characterArmourTypeAbilityValue)
        ? totalEquippedArmourValue
        : DnDUtils.calculateMaxWeaponDamage(
          R.prop('class', selectedCharacter),
          R.prop('level', selectedCharacter),
          characterArmourTypeAbilityValue,
          totalEquippedArmourValue,
        ),
    }
  }
)

export default selector
