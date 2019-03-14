import { createSelector } from 'reselect'
import * as R from 'ramda'

import * as DnDUtils from '../../common/utils/dnd.utils'

const selector = createSelector(
  [
    R.pipe(R.nthArg(1), R.prop('selectedCharacter')),
    R.prop('characterAttributes'),
  ],
  (selectedCharacter, characterAttributes) => {
    const selectedCharacterAttributesById = R.indexBy(R.prop('id'))(R.prop('attributes', selectedCharacter))
    const attributesByName = R.indexBy(R.prop('name'))(characterAttributes)
    const constitutionAttribute = R.prop('constitution', attributesByName)
    const constitutionValue = R.path([R.prop('id', constitutionAttribute), 'value'], selectedCharacterAttributesById)
    return {
      hitPoints: 60,
      maxHitPoints: DnDUtils.calculateMaxHP(selectedCharacter.class, selectedCharacter.level, constitutionValue),
    }
  }
)

export default selector
