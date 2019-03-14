import assert from 'assert'
import parametrize from 'js-parametrize'
import * as R from 'ramda'

import SUT from './CharacterEquipment.selector'
import { itemTypes } from '../Items/Items.constants'

describe('CharacterEquipment selector', () => {
  describe('characterEquipment', () => {
    parametrize([
      [itemTypes.WEAPON_MELEE],
      [itemTypes.WEAPON_RANGED],
      [itemTypes.WEAPON_MAGICAL],
    ], (weapon3Type) => {
      it('should select character equipped weapon as expected', () => {
        // given
        // ... a selected character id
        // ... and selected character has multiple items equipped in state
        // ... including 2 weapons equipped (invalid data/unsupported)
        const selectedCharacterId = 123
        const state = {
          selectedCharacterId,
          items: [
            {
              id: 1,
              characterId: null,
              name: 'WEAPON ONE',
              type: 'ranged-weapon',
            },
            {
              id: 2,
              characterId: 345,
              name: 'WEAPON TWO',
              type: 'melee-weapon',
            },
            {
              id: 3,
              characterId: selectedCharacterId,
              name: 'WEAPON THREE',
              type: weapon3Type,
            },
            {
              id: 4,
              characterId: selectedCharacterId,
              name: 'WEAPON FOUR',
              type: 'ranged-weapon',
            },
            {
              id: 5,
              characterId: selectedCharacterId,
              name: 'SHIELD',
              type: 'shield',
            },
            {
              id: 6,
              characterId: selectedCharacterId,
              name: 'ACCESSORY',
              type: 'accessory',
            },
            {
              id: 7,
              characterId: selectedCharacterId,
              name: 'ARMOUR',
              type: 'attire',
            },
          ],
        }
        // when ... we selected selected character equipment (equipped items)
        const result = SUT(state)
        // then ... should return expected weapon
        assert.strictEqual(R.pathOr(null, ['characterEquipment', 'weapon', 'name'], result), 'WEAPON THREE')
      })

      it('should select character equipped shield as expected', () => {
        // given
        // ... a selected character id
        // ... and selected character has multiple items equipped in state
        // ... including 2 shields equipped (invalid data/unsupported)
        const selectedCharacterId = 123
        const state = {
          selectedCharacterId,
          items: [
            {
              id: 1,
              characterId: selectedCharacterId,
              name: 'WEAPON',
              type: 'ranged-weapon',
            },
            {
              id: 2,
              characterId: null,
              name: 'SHIELD ONE',
              type: 'shield',
            },
            {
              id: 3,
              characterId: 345,
              name: 'SHIELD TWO',
              type: 'shield',
            },
            {
              id: 4,
              characterId: selectedCharacterId,
              name: 'SHIELD THREE',
              type: 'shield',
            },
            {
              id: 5,
              characterId: selectedCharacterId,
              name: 'SHIELD FOUR',
              type: 'shield',
            },
            {
              id: 6,
              characterId: selectedCharacterId,
              name: 'ACCESSORY',
              type: 'accessory',
            },
            {
              id: 7,
              characterId: selectedCharacterId,
              name: 'ARMOUR',
              type: 'attire',
            },
          ],
        }
        // when ... we selected selected character equipment (equipped items)
        const result = SUT(state)
        // then ... should return expected shield
        assert.strictEqual(R.pathOr(null, ['characterEquipment', 'shield', 'name'], result), 'SHIELD THREE')
      })

      it('should select character equipped accessories as expected', () => {
        // given
        // ... a selected character id
        // ... and selected character has multiple items equipped in state
        // ... including 3 accessories equipped (invalid data/unsupported)
        const selectedCharacterId = 123
        const state = {
          selectedCharacterId,
          items: [
            {
              id: 1,
              characterId: selectedCharacterId,
              name: 'WEAPON',
              type: 'ranged-weapon',
            },
            {
              id: 2,
              characterId: selectedCharacterId,
              name: 'SHIELD',
              type: 'shield',
            },
            {
              id: 3,
              characterId: null,
              name: 'ACCESSORY ONE',
              type: 'accessory',
            },
            {
              id: 4,
              characterId: 345,
              name: 'ACCESSORY TWO',
              type: 'accessory',
            },
            {
              id: 5,
              characterId: selectedCharacterId,
              name: 'ACCESSORY THREE',
              type: 'accessory',
            },
            {
              id: 6,
              characterId: selectedCharacterId,
              name: 'ACCESSORY FOUR',
              type: 'accessory',
            },
            {
              id: 7,
              characterId: selectedCharacterId,
              name: 'ACCESSORY FIVE',
              type: 'accessory',
            },
            {
              id: 8,
              characterId: selectedCharacterId,
              name: 'ARMOUR',
              type: 'attire',
            },
          ],
        }
        // when ... we selected selected character equipment (equipped items)
        const result = SUT(state)
        // then ... should return expected accessories 1 & 2
        assert.strictEqual(R.pathOr(null, ['characterEquipment', 'accessory1', 'name'], result), 'ACCESSORY THREE')
        assert.strictEqual(R.pathOr(null, ['characterEquipment', 'accessory2', 'name'], result), 'ACCESSORY FOUR')
      })

      it('should select character equipped attire as expected', () => {
        // given
        // ... a selected character id is provided as a prop
        // ... and selected character has multiple items equipped in state
        // ... including 2 attires equipped (invalid data/unsupported)
        const selectedCharacterId = 123
        const state = {
          selectedCharacterId,
          items: [
            {
              id: 1,
              characterId: selectedCharacterId,
              name: 'WEAPON',
              type: 'ranged-weapon',
            },
            {
              id: 2,
              characterId: selectedCharacterId,
              name: 'SHIELD',
              type: 'shield',
            },
            {
              id: 3,
              characterId: selectedCharacterId,
              name: 'ACCESSORY',
              type: 'accessory',
            },
            {
              id: 4,
              characterId: null,
              name: 'ARMOUR ONE',
              type: 'attire',
            },
            {
              id: 5,
              characterId: 345,
              name: 'ARMOUR TWO',
              type: 'attire',
            },
            {
              id: 6,
              characterId: selectedCharacterId,
              name: 'ARMOUR THREE',
              type: 'attire',
            },
            {
              id: 7,
              characterId: selectedCharacterId,
              name: 'ARMOUR FOUR',
              type: 'attire',
            },
          ],
        }
        // when ... we selected selected character equipment (equipped items)
        const result = SUT(state)
        // then ... should return expected attire
        assert.strictEqual(R.pathOr(null, ['characterEquipment', 'attire', 'name'], result), 'ARMOUR THREE')
      })
    })
  })
})
