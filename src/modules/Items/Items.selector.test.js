import assert from 'assert'
import * as R from 'ramda'

import SUT from './Items.selector'

describe('Items selector', () => {
  describe('selectedCharacterId', () => {
    it('should select selected character id', () => {
      // given ... selected character id in state
      const state = {
        selectedCharacterId: 123,
        items: [],
      }
      // when ... we select selected character id
      const result = SUT(state)
      // then ... should return expected value
      assert.strictEqual(result.selectedCharacterId, 123)
    })
  })

  describe('items', () => {
    it('should select all unequipped items', () => {
      // given
      // ... 2 characters
      // ... 2 equipped items
      // ... and 3 unequipped items
      // ... in state
      const state = {
        selectedCharacterId: 123,
        items: [
          {
            id: 1,
            name: 'ITEM ONE',
            characterId: null,
            type: 'melee-weapon',
          },
          {
            id: 2,
            name: 'ITEM TWO',
            characterId: 2,
            type: 'melee-weapon',
          },
          {
            id: 3,
            name: 'ITEM THREE',
            characterId: null,
            type: 'melee-weapon',
          },
          {
            id: 4,
            name: 'ITEM FOUR',
            characterId: null,
            type: 'melee-weapon',
          },
          {
            id: 5,
            name: 'ITEM FIVE',
            characterId: 1,
            type: 'melee-weapon',
          },
        ],
      }
      // when ... we select items
      const result = SUT(state)
      // then ... should return all unequipped items
      assert.deepStrictEqual(R.pluck('id', result.items), [1, 3, 4])
    })

    it('should allow equip for all unequipped items of type with available slots for selected character', () => {
      // given
      // ... selected character has no weapon equipped
      // ... and 2 unequipped weapon items
      // ... and 1 equipped weapon, equipped by other character
      // ... in state
      const state = {
        selectedCharacterId: 123,
        items: [
          {
            id: 1,
            name: 'ITEM ONE',
            characterId: null,
            type: 'melee-weapon',
          },
          {
            id: 2,
            name: 'ITEM TWO',
            characterId: null,
            type: 'melee-weapon',
          },
          {
            id: 3,
            name: 'ITEM THREE',
            characterId: 345,
            type: 'melee-weapon',
          },
        ],
      }
      // when ... we select items
      const result = SUT(state)
      // then ... should set allowEquip for all unequipped items as expected
      const resultById = R.indexBy(R.prop('id'), result.items)
      assert.deepStrictEqual(resultById['1'].allowEquip, true)
      assert.deepStrictEqual(resultById['2'].allowEquip, true)
    })

    it('should disallow equip for all unequipped items of type with no available slots for selected character', () => {
      // given
      // ... selected character has 1 weapon equipped
      // ... and 2 additional unequipped weapon items
      // ... and 1 equipped weapon, equipped by other character
      // ... in state
      const state = {
        selectedCharacterId: 123,
        items: [
          {
            id: 1,
            name: 'ITEM ONE',
            characterId: null,
            type: 'melee-weapon',
          },
          {
            id: 2,
            name: 'ITEM TWO',
            characterId: null,
            type: 'melee-weapon',
          },
          {
            id: 3,
            name: 'ITEM THREE',
            characterId: 345,
            type: 'melee-weapon',
          },
          {
            id: 4,
            name: 'ITEM FOUR',
            characterId: 123,
            type: 'melee-weapon',
          },
        ],
      }
      // when ... we select items
      const result = SUT(state)
      // then ... should set allowEquip for all unequipped items as expected
      const resultById = R.indexBy(R.prop('id'), result.items)
      assert.deepStrictEqual(resultById['1'].allowEquip, false)
      assert.deepStrictEqual(resultById['2'].allowEquip, false)
    })
  })
})
