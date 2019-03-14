import assert from 'assert'

import SUT from './CharacterAttributes.selector'

describe('CharacterAttributes selector', () => {
  describe('characterAttributes', () => {
    it('should select modified character attributes as expected including modification values', () => {
      // given
      // ... selected character attributes (2) provided as a props
      // ... a selected character id
      // ... and items (with modifiers) equipped by selected character
      // ... in state
      const characterAttributeModifier1 = {
        characterAttributeId: 2,
        operator: 'add',
        value: 6,
      }
      const characterAttributeModifier2 = {
        characterAttributeId: 2,
        operator: 'subtract',
        value: 2,
      }
      const characterAttributeModifier3 = {
        characterAttributeId: 3,
        operator: 'add',
        value: 7,
      }
      const characterAttributeModifier4 = {
        characterAttributeId: 3,
        operator: 'add',
        value: 2,
      }
      const props = {
        selectedCharacterAttributes: [
          { id: 1, value: 123 },
          { id: 2, value: 10 },
        ],
      }
      const state = {
        selectedCharacterId: 111,
        characterAttributes: [
          {
            id: 1,
            name: 'ATTR_ONE',
            type: 'dynamic',
          },
          {
            id: 2,
            name: 'ATTR_TWO',
            type: 'level',
          },
          {
            id: 3,
            name: 'ATTR_THREE',
            type: 'derived',
          },
        ],
        items: [
          {
            id: 1,
            name: 'WEAPON',
            characterId: 111,
            characterAttributeModifiers: [
              { id: 1, itemId: 1, ...characterAttributeModifier1 },
              { id: 2, itemId: 1, ...characterAttributeModifier2 },
            ],
          },
          {
            id: 2,
            name: 'SHIELD',
            characterId: 111,
            characterAttributeModifiers: [
              { id: 3, itemId: 2, ...characterAttributeModifier1 },
              { id: 4, itemId: 2, ...characterAttributeModifier2 },
            ],
          },
          {
            id: 3,
            name: 'ACCESSORY_ONE',
            characterId: 111,
            characterAttributeModifiers: [
              { id: 5, itemId: 3, ...characterAttributeModifier1 },
              { id: 6, itemId: 3, ...characterAttributeModifier2 },
            ],
          },
          {
            id: 4,
            name: 'ACCESSORY_TWO',
            characterId: 111,
            characterAttributeModifiers: [
              { id: 7, itemId: 4, ...characterAttributeModifier1 },
              { id: 8, itemId: 4, ...characterAttributeModifier2 },
            ],
          },
          {
            id: 5,
            name: 'ATTIRE',
            characterId: 111,
            characterAttributeModifiers: [
              { id: 9, itemId: 5, ...characterAttributeModifier3 },
              { id: 10, itemId: 5, ...characterAttributeModifier4 },
            ],
          },
        ],
      }
      // when ... we selected selected character attributes
      const result = SUT(state, props)

      // then
      // ... should return unmodified attribute 1
      assert.deepStrictEqual(result.characterAttributes[0], {
        id: 1,
        name: 'ATTR_ONE',
        type: 'dynamic',
        baseValue: 123,
        value: 123,
        modifiers: [],
        groupedModifierValues: {},
      })
      // ... should return level attribute 2 as modified by all but the attire equipped items
      assert.deepStrictEqual(result.characterAttributes[1], {
        id: 2,
        name: 'ATTR_TWO',
        type: 'level',
        baseValue: 10,
        value: 10 + ((+6 -2) * 4),
        // value = base + ((mod1, mod2) * equipment slots)
        // value = base + ((weapon mods) + (shield mods) ...)
        modifiers: [
          { id: 1, itemId: 1, ...characterAttributeModifier1 },
          { id: 2, itemId: 1, ...characterAttributeModifier2 },
          { id: 3, itemId: 2, ...characterAttributeModifier1 },
          { id: 4, itemId: 2, ...characterAttributeModifier2 },
          { id: 5, itemId: 3, ...characterAttributeModifier1 },
          { id: 6, itemId: 3, ...characterAttributeModifier2 },
          { id: 7, itemId: 4, ...characterAttributeModifier1 },
          { id: 8, itemId: 4, ...characterAttributeModifier2 },
        ],
        groupedModifierValues: {
          add: (+6) * 4,
          subtract: (-2) * 4,
        },
      })
    })
  })
})
