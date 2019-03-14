import { createSelector } from 'reselect'
import * as R from 'ramda'

import * as DnDUtils from '../../common/utils/dnd.utils'

const selector = createSelector(
  [
    R.pipe(R.nthArg(1), R.prop('selectedCharacter')),
    R.prop('characterAttributes'),
  ],
  (selectedCharacter, characterAttributes) => {
    // const selectedCharacterAttributesById = R.indexBy(R.prop('id'))(R.prop('attributes', selectedCharacter))
    // const attributesByName = R.indexBy(R.prop('name'))(characterAttributes)
    // const constitutionAttribute = R.prop('constitution', attributesByName)
    // const constitutionValue = R.path([R.prop('id', constitutionAttribute), 'value'], selectedCharacterAttributesById)
    const armourEquippedByCharacter = {
      label: 'Heavy Armour 1',
      type: 'heavy-armour',
      armour: 60,
      characterAttributeModifiers: [
        {
          id: 2,
          label: '+ 30 Armour',
          operator: 'add',
          value: 5,
        },
      ],
    }
    return {
      armour: armourEquippedByCharacter,
      armourClass: 60,
    }
  }
)

export default selector
