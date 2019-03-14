import assert from 'assert'
import parametrize from 'js-parametrize'

import SUT, { equipItem, unequipItem } from './Items.reducer'

describe('item reducer', () => {
  describe('associateItemWithCharacter', () => {
    parametrize([
      [equipItem],
    ], (action) => {
      it('should associate item with character from action payload', () => {
        // given ... multiple items in state, none belonging to character 1
        const state = [
          {
            id: 1,
            name: 'ITEM ONE',
            characterId: null,
          },
          {
            id: 2,
            name: 'ITEM TWO',
            characterId: null,
          },
        ]

        // when ... we associate item 2 with character 1
        const characterId = 1
        const itemId = 2
        const result = SUT(state, action(characterId, itemId))

        // then
        // ... should update items state as expected
        assert.deepStrictEqual(result, [
          {
            id: 1,
            name: 'ITEM ONE',
            characterId: null,
          },
          {
            id: 2,
            name: 'ITEM TWO',
            characterId: 1,
          },
        ])
      })
    })
  })

  describe('disassociateItemWithCharacter', () => {
    parametrize([
      [unequipItem],
    ], (action) => {
      it('should disassociate item with character from action payload', () => {
        // given ... multiple items in state, multiple belonging to character 1
        const state = [
          {
            id: 1,
            name: 'ITEM ONE',
            characterId: 1,
          },
          {
            id: 2,
            name: 'ITEM TWO',
            characterId: 1,
          },
        ]

        // when ... we disassociate item 2 with characters
        const itemId = 2
        const result = SUT(state, action(itemId))

        // then
        // ... should update items state as expected
        assert.deepStrictEqual(result, [
          {
            id: 1,
            name: 'ITEM ONE',
            characterId: 1,
          },
          {
            id: 2,
            name: 'ITEM TWO',
            characterId: null,
          },
        ])
      })
    })
  })
})
