import assert from 'assert'
import parametrize from 'js-parametrize'
import * as R from 'ramda'

import SUT from './CharacterDefense.selector'

describe('CharacterDefense selector', () => {
  describe('CharacterDefense', () => {
    // parametrize([
    //   [1, null, null, null, null, null],
    //   [2, 'WEAPON ONE', 'SHIELD ONE', 'ACCESSORY TWO', 'ACCESSORY ONE', 'ARMOUR ONE'],
    //   [3, 'WEAPON TWO', null, 'ACCESSORY THREE', 'ACCESSORY FOUR', 'ROBE ONE'],
    // ], (selectedCharacterId, expectedWeapon, expectedShield, expectedAccessory1, expectedAccessory2, expectedAttire) => {
      it('should select character attributes as expected', () => {
        // // given
        // // ... 2 characters
        // // ... and the provided selected character id
        // // ... and multiple character attributes
        // // ... in state
        // const state = {
        //   selectedCharacterId,
        //   characters: [
        //     {
        //       id: 1,
        //       name: 'CHARACTER ONE',
        //       equipment: {
        //         weapon: null,
        //         shield: null,
        //         accessory1: null,
        //         accessory2: null,
        //         attire: null,
        //       },
        //     },
        //     {
        //       id: 2,
        //       name: 'CHARACTER TWO',
        //       equipment: {
        //         weapon: 1,
        //         shield: 2,
        //         accessory1: 4,
        //         accessory2: 3,
        //         attire: 5,
        //       },
        //     },
        //     {
        //       id: 3,
        //       name: 'CHARACTER ONE',
        //       equipment: {
        //         weapon: 6,
        //         shield: null,
        //         accessory1: 7,
        //         accessory2: 9,
        //         attire: 8,
        //       },
        //     },
        //   ],
        //   items: [
        //     {
        //       id: 1,
        //       characterId: 2,
        //       name: 'WEAPON ONE',
        //       type: 'weapon',
        //     },
        //     {
        //       id: 2,
        //       characterId: 2,
        //       name: 'SHIELD ONE',
        //       type: 'shield',
        //     },
        //     {
        //       id: 3,
        //       characterId: 2,
        //       name: 'ACCESSORY ONE',
        //       type: 'accessory',
        //     },
        //     {
        //       id: 4,
        //       characterId: 2,
        //       name: 'ACCESSORY TWO',
        //       type: 'accessory',
        //     },
        //     {
        //       id: 5,
        //       characterId: 2,
        //       name: 'ARMOUR ONE',
        //       type: 'attire',
        //     },
        //     {
        //       id: 6,
        //       characterId: 3,
        //       name: 'WEAPON TWO',
        //       type: 'weapon',
        //     },
        //     {
        //       id: 7,
        //       characterId: 3,
        //       name: 'ACCESSORY THREE',
        //       type: 'accessory',
        //     },
        //     {
        //       id: 8,
        //       characterId: 3,
        //       name: 'ROBE ONE',
        //       type: 'attire',
        //     },
        //     {
        //       id: 9,
        //       characterId: 3,
        //       name: 'ACCESSORY FOUR',
        //       type: 'accessory',
        //     },
        //   ],
        // }
        // // when ... we selected selected character equipment
        // const result = SUT(state)
        // // then ... should return expected values for each of selected character's equipment
        // assert.strictEqual(R.pathOr(null, ['CharacterDefense', 'weapon', 'name'], result), expectedWeapon)
        // assert.strictEqual(R.pathOr(null, ['CharacterDefense', 'shield', 'name'], result), expectedShield)
        // assert.strictEqual(R.pathOr(null, ['CharacterDefense', 'accessory1', 'name'], result), expectedAccessory1)
        // assert.strictEqual(R.pathOr(null, ['CharacterDefense', 'accessory2', 'name'], result), expectedAccessory2)
        // assert.strictEqual(R.pathOr(null, ['CharacterDefense', 'attire', 'name'], result), expectedAttire)
      })
    // })
  })
})
