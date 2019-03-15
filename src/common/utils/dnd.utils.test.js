import assert from 'assert'
import parametrize from 'js-parametrize'

import * as SUT from './dnd.utils'

describe('DnD Utils', () => {
  describe('calculateMaxHP', () => {
    parametrize([
      ['barbarian', 15, 13, 125],
      ['rogue', 10, 18, 93],
      ['wizard', 15, 18, 122],
      ['wizard', 16,  1, 16],
      ['barbarian', 15,  7, 80],
      ['warlock', 15,  3, 18],
      ['ranger', 14,  1, 18],
      ['warlock',  3, 14, 24],
      ['druid',  3,  4, 9],
      ['cleric', 11,  5, 25],
      ['bard', 20, 11, 103],
      ['barbarian', 11, 13, 93],
      ['bard',  8, 19, 75],
      ['bard', 16, 17, 131],
      ['fighter', 10,  6, 44],
      ['monk', 10,  2, 13],
      ['cleric', 14, 17, 115],
      ['cleric',  6,  5, 15],
      ['rogue',  7, 13, 45],
      ['cleric',  4, 14, 31],
      ['rogue', 19, 15, 136],
      ['paladin', 13, 13, 95],
      ['cleric', 13, 15, 94],
      ['bard',  8,  5, 19],
      ['monk', 20, 11, 103],
      ['barbarian',  8, 20, 101],
      ['monk',  1,  4, 5],
      ['bard',  5, 17, 43],
      ['monk', 18,  7, 57],
      ['wizard', 17,  5, 19],
    ], (charClass, charLevel, charConstitution, expected) => {
      it(`should return expected value for max HP calculation for class (${charClass}) at level (${charLevel}) with constitution (${charConstitution})`, () => {
        // when ... we calculate the max HP for the provided character class, level and constitution
        // then ... should return expected values
        assert.strictEqual(SUT.calculateMaxHP(charClass, charLevel, charConstitution), expected)
      })
    })
  })

  describe('calculateMaxWeaponDamage', () => {
    // TODO: should return expected value for max attack damage calculation for class (${charClass}) at level (${charLevel}) with ability (${charAbility}) and weapon (${weaponDamage})
  })

  describe('calculateMaxSpellDamage', () => {
    // TODO: should return expected value for max spell damage calculation for class (${charClass}) at level (${charLevel}) with intelligence (${charIntelligence}) and magical weapon damage (${weaponSpellDamage})
  })

  describe('calculateArmourClass', () => {
    // TODO: should return expected value for armour class calculation for class (${charClass}) at level (${charLevel}) with ability (${charAbility}) and item base armour (${itemBaseArmour})
  })
})
