import assert from 'assert'
import parametrize from 'js-parametrize'

import SUT from './CharacterAttack.selector'

describe('CharacterAttack selector', () => {
  describe('CharacterAttack', () => {
    parametrize([
      ['melee-weapon', 200, 295],
      ['ranged-weapon', 200, 265],
      ['magical-weapon', 200, 200],
    ], (weaponType, weaponDamage, expected) => {
      it('should select character attributes as expected', () => {
        // given
        // ... selected character:
        // ... - is level 10 barbarian
        // ... - has strength attribute of 14
        // ... - has dexterity attribute of 8
        // ... and is provided as a prop
        // ... and character attributes (including strength) are in state
        // ... and selected character has provided weapon equipped
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
              type: 'magical-weapon',
              damage: 40,
            },
            {
              id: 2,
              characterId: 123,
              type: weaponType,
              damage: weaponDamage,
            },
            {
              id: 3,
              characterId: 123,
              type: 'ranged-weapon',
              damage: 100,
            },
            {
              id: 4,
              characterId: 123,
              type: 'shield',
            },
          ],
        }

        // when ... we select weapon and max attack damage for selected character
        const result = SUT(state, props)

        // then ... should return expected value
        assert.deepStrictEqual(result.weapon, {
          id: 2,
          characterId: 123,
          type: weaponType,
          damage: weaponDamage,
        })
        assert.strictEqual(result.maxAttackDamage, expected)
      })
    })
  })
})
