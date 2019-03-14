import assert from 'assert'
import parametrize from 'js-parametrize'

import SUT from './SelectedCharacter.selector'

describe('SelectedCharacter selector', () => {
  describe('selectedCharacter', () => {
    parametrize([
      [1, 0],
      [2, 1],
    ], (selectedCharacterId, indexOfExpected) => {
      it('should select selected character from characters using id', () => {
        // given ... 3 characters and a selected character id in state
        const state = {
          selectedCharacterId,
          characters: [
            {
              id: 1,
              name: 'CHARACTER ONE',
            },
            {
              id: 2,
              name: 'CHARACTER TWO',
            },
            {
              id: 3,
              name: 'CHARACTER THREE',
            },
          ],
        }
        // when ... we selected selected character index
        // then ... should return expected index
        const result = SUT(state)
        assert.strictEqual(result.selectedCharacter, state.characters[indexOfExpected])
      })
    })
  })
})
