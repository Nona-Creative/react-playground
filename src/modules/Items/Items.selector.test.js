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
          },
          {
            id: 2,
            name: 'ITEM TWO',
            characterId: 2,
          },
          {
            id: 3,
            name: 'ITEM THREE',
            characterId: null,
          },
          {
            id: 4,
            name: 'ITEM FOUR',
            characterId: null,
          },
          {
            id: 5,
            name: 'ITEM FIVE',
            characterId: 1,
          },
        ],
      }
      // when ... we select items
      const result = SUT(state)
      // then ... should return all unequipped items
      assert.deepStrictEqual(R.pluck('id', result.items), [1, 3, 4])
    })
  })
})
