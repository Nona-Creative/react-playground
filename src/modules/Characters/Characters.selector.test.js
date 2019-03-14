import assert from 'assert'
import parametrize from 'js-parametrize'

import SUT from './Characters.selector'

describe('Characters selector', () => {
  describe('characters', () => {
    it('should select characters as expected', () => {
      // given ... 2 characters in state
      const state = {
        characters: [
          {
            id: 1,
            name: 'CHARACTER ONE',
          },
          {
            id: 2,
            name: 'CHARACTER TWO',
          },
        ],
      }
      // when ... we select characters
      // then ... should return expected structure and values for each character
      const result = SUT(state)
      assert.deepStrictEqual(result.characters, state.characters)
    })
  })

  describe('selectedCharacterIndex', () => {
    parametrize([
      [1, 0],
      [2, 1],
      [4, -1],
      [-1, -1],
      [null, -1],
    ], (selectedCharacterId, expected) => {
      it('should select selected character index', () => {
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
        assert.strictEqual(result.selectedCharacterIndex, expected)
      })
    })
  })
})
