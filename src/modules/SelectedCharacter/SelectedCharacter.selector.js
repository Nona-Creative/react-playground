import { createSelector } from 'reselect'
import * as R from 'ramda'

const selector = createSelector(
  [
    R.prop('characters'),
    R.prop('selectedCharacterId'),
  ],
  (characters, selectedCharacterId) => ({
    selectedCharacter: R.find(R.propEq('id', selectedCharacterId))(characters),
  })
)

export default selector
