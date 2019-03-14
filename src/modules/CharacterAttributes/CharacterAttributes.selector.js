import { createSelector } from 'reselect'
import * as R from 'ramda'

const operatorMap = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
}

const adjustWithOperatorAndValue = (a, { value: b, operator }) => operatorMap[operator](a, b)

const adjustAttributeWithModifers = (attribute, equippedItemModifiers) => {
  const baseValue = R.prop('value', attribute)
  const modifiers = R.filter(
    R.propEq('characterAttributeId', R.prop('id', attribute))
  )(equippedItemModifiers)
  const groupedModifiers = R.groupBy(R.prop('operator'), modifiers)
  return {
    value: R.reduce(adjustWithOperatorAndValue, baseValue)(modifiers),
    baseValue,
    modifiers,
    groupedModifierValues: R.mapObjIndexed(
      R.reduce(adjustWithOperatorAndValue, 0)
    )(groupedModifiers),
  }
}

const selector = createSelector(
  [
    R.pipe(R.nthArg(1), R.prop('selectedCharacterAttributes')),
    R.prop('selectedCharacterId'),
    R.prop('characterAttributes'),
    R.prop('items'),
  ],
  (selectedCharacterAttributes, selectedCharacterId, characterAttributes, items) => {
    // get modifiers for all items equipped by character
    const itemsEquippedByCharacter = R.compose(
      R.prop(selectedCharacterId),
      R.groupBy(R.prop('characterId')),
    )(items)
    const equippedItemModifiers = R.flatten(R.pluck('characterAttributeModifiers', itemsEquippedByCharacter))

    // get character attributes
    const characterAttributesById = R.indexBy(R.prop('id'))(characterAttributes)
    const mergedCharacterAttributes = R.map(x => (
      R.mergeRight(x, R.prop(x.id, characterAttributesById))
    ))(selectedCharacterAttributes)

    // adjust attribute using modifiers
    const modifiedCharacterAttributes = R.map(x => {
      return R.mergeRight(x, adjustAttributeWithModifers(x, equippedItemModifiers))
    }, mergedCharacterAttributes)

    // structure result
    return {
      selectedCharacterId,
      characterAttributes: modifiedCharacterAttributes,
    }
  }
)

export default selector
