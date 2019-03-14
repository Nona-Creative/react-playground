import { createSelector } from 'reselect'
import * as R from 'ramda'

const selector = createSelector(
  [
    R.prop('characters'),
    R.prop('selectedCharacterId'),
  ],
  (characters, selectedCharacterId) => ({
    characters,
    selectedCharacterIndex: R.findIndex(R.propEq('id', selectedCharacterId))(characters),
  })
)

export default selector
