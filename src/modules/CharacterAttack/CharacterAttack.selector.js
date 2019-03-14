import { createSelector } from 'reselect'
import * as R from 'ramda'

import * as DnDUtils from '../../common/utils/dnd.utils'
import {
  equipmentSlotItemTypes,
  weaponTypesCharacterAbility,
} from '../CharacterEquipment/CharacterEquipment.constants'

const selector = createSelector(
  [
    R.pipe(R.nthArg(1), R.prop('selectedCharacter')),
    R.prop('characterAttributes'),
    R.prop('items'),
  ],
  (selectedCharacter, characterAttributes, items) => {
    // get weapon equipped by character
    const selectedCharacterId = R.prop('id', selectedCharacter)
    const weaponEquippedByCharacter = R.pipe(
      R.groupBy(R.prop('characterId')),
      R.propOr([], selectedCharacterId),
      R.filter(x => R.includes(R.prop('type', x), R.prop('weapons', equipmentSlotItemTypes))),
      R.propOr(null, 0),
    )(items)

    // get character ability value for weapon type
    const weaponTypeCharacterAbilityId = R.prop(
      R.prop('type', weaponEquippedByCharacter),
      weaponTypesCharacterAbility,
    )
    const characterWeaponTypeAbilityValue = R.pathOr(
      null,
      [weaponTypeCharacterAbilityId, 'value'],
      R.indexBy(R.prop('id'), R.prop('attributes', selectedCharacter)),
    )

    // TODO: add spell damage
    return {
      weapon: weaponEquippedByCharacter,
      // calculate max weapon attack damage
      maxAttackDamage: R.isNil(characterWeaponTypeAbilityValue)
        ? R.prop('damage', weaponEquippedByCharacter)
        : DnDUtils.calculateMaxWeaponDamage(
          R.prop('class', selectedCharacter),
          R.prop('level', selectedCharacter),
          characterWeaponTypeAbilityValue,
          R.prop('damage', weaponEquippedByCharacter),
        ),
    }
  }
)

export default selector
