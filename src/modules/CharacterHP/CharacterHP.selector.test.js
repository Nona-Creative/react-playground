import assert from 'assert'

import SUT from './CharacterHP.selector'

describe('CharacterHP selector', () => {
  describe('CharacterHP', () => {
    it('should select character attributes as expected', () => {
      // given
      // ... selected character:
      // ... - is level 8 barbarian
      // ... - has constitution attribute of 20
      // ... and is provided as a prop
      // ... and character attributes (including constitution) is in state
      const props = {
        selectedCharacter: {
          class: 'barbarian',
          level: 8,
          attributes: [
            {
              id: 1,
              value: 20,
            },
          ],
        },
      }
      const state = {
        characterAttributes: [
          {
            id: 1,
            name: 'constitution',
          },
        ],
      }
      const expected = 101

      // when ... we select hit points and max hit points for selected character
      const result = SUT(state, props)

      // then ... should return expected value
      assert.strictEqual(result.hitPoints, 60)
      assert.strictEqual(result.maxHitPoints, expected)
    })
  })
})
