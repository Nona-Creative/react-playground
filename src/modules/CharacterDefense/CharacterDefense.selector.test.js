import assert from 'assert'
import parametrize from 'js-parametrize'

import SUT from './CharacterDefense.selector'

describe('CharacterDefense selector', () => {
  describe('armours', () => {
    parametrize([
      ['armour-heavy', 200, 495],
      ['armour-light', 200, 465],
      ['armour-magical', 200, 400],
    ], (armourType, armourValue, expectedArmourClass) => {
      it('should select character armour items and armour class as expected', () => {
        // given
        // ... selected character:
        // ... - is level 10 barbarian
        // ... - has strength attribute of 14
        // ... - has dexterity attribute of 8
        // ... and is provided as a prop
        // ... and character attributes (including strength & dexterity) are in state
        // ... and selected character has 2 armour items
        // ... each of the provided types and value equipped
        const props = {
          selectedCharacter: {
            id: 123,
            class: 'barbarian',
            level: 10,
            attributes: [
              {
                id: 1,
                value: 14,
              },
              {
                id: 2,
                value: 8,
              },
            ],
          },
        }
        const state = {
          characterAttributes: [
            {
              id: 1,
              name: 'strength',
            },
            {
              id: 2,
              name: 'dexterity',
            },
          ],
          items: [
            {
              id: 1,
              characterId: null,
              type: 'attire',
              armourType: 'magical-armour',
              armour: 20,
            },
            {
              id: 2,
              characterId: null,
              type: 'shield',
              armourType: 'light-armour',
              armour: 30,
            },
            {
              id: 3,
              characterId: 123,
              type: 'attire',
              armourType,
              armour: armourValue,
            },
            {
              id: 4,
              characterId: 123,
              type: 'shield',
              armourType,
              armour: armourValue,
            },
            {
              id: 5,
              characterId: 123,
              type: 'ranged-weapon',
              damage: 100,
            },
            {
              id: 6,
              characterId: 123,
              type: 'accessory',
            },
          ],
        }

        // when ... we select armour items and armour class for selected character
        const result = SUT(state, props)

        // then ... should return expected value
        assert.deepStrictEqual(result.armours, [
          {
            id: 3,
            characterId: 123,
            type: 'attire',
            armourType,
            armour: armourValue,
          },
          {
            id: 4,
            characterId: 123,
            type: 'shield',
            armourType,
            armour: armourValue,
          },
        ])
        assert.strictEqual(result.armourClass, expectedArmourClass)
      })
    })
  })
})
