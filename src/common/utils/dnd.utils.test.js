import assert from 'assert'
import parametrize from 'js-parametrize'

import * as SUT from './dnd.utils'

describe('DnD Utils', () => {
  describe('calculateMaxHP', () => {
    parametrize([
      [0,  -5],
      [1,  -5],
      [5,  -3],
      [10,  0],
      [15,  2],
      [20,  5],
    ], (abilityValue, expected) => {
      it('should return expected value for ability modifier calculation', () => {
        // when ... we calculate an ability modifier
        // then ... should return expected value
        assert.strictEqual(SUT.calculateAbilityModifier(abilityValue), expected)
      })
    })

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
    parametrize([
      ['wizard', 3,  1],
      ['wizard', 16,  8],
      ['rogue', 1, 0],
      ['rogue', 20, 15],
      ['fighter', 1,  1],
      ['fighter', 20,  20],
    ], (charClass, charLevel, expected) => {
      it(`should return expected value for attack bonus for class (${charClass}) at level (${charLevel})`, () => {
        // when ... we get the base attack bonus for provided character class & level
        // then ... should return expected values
        assert.strictEqual(SUT.getBaseAttackBonusForClassAtLevel(charClass, charLevel), expected)
      })
    })

    parametrize([
      ['barbarian', 1, 1, 100, 107],
      ['barbarian', 10, 14, 200, 295],
      ['barbarian', 10, 8, 200, 265],
      ['barbarian', 20, 20, 200, 445],
      ['wizard', 1, 1, 100, 101],
      ['wizard', 20, 10, 100, 182],
      ['wizard', 20, 20, 200, 382],
      ['rogue', 15, 10, 100, 178],
      ['fighter', 15, 10, 100, 194],
      ['fighter', 15, 20, 100, 269],
      ['fighter', 20, 20, 100, 324],
    ], (charClass, charLevel, charAbility, weaponDamage, expected) => {
      it(`should return expected value for max attack damage calculation for class (${charClass}) at level (${charLevel}) with ability (${charAbility}) and weapon (${weaponDamage})`, () => {
        // when ... we calculate the max attack damage for the provided character class, level, ability and weapon
        // then ... should return expected values
        assert.strictEqual(SUT.calculateMaxWeaponDamage(charClass, charLevel, charAbility, weaponDamage), expected)
      })
    })
  })

  describe('calculateMaxSpellDamage', () => {
    parametrize([
      ['barbarian', 1, 1, 10, 11],
      ['barbarian', 10, 15, 10, 72],
      ['barbarian', 20, 20, 10, 192],
      ['barbarian', 20, 20, 20, 202],
      ['wizard', 1, 1, 10, 17],
      ['wizard', 10, 15, 10, 105],
      ['wizard', 20, 20, 10, 255],
      ['wizard', 20, 20, 20, 265],
      ['rogue', 15, 10, 100, 194],
      ['fighter', 15, 10, 100, 178],
    ], (charClass, charLevel, charIntelligence, weaponSpellDamage, expected) => {
      it(`should return expected value for max spell damage calculation for class (${charClass}) at level (${charLevel}) with intelligence (${charIntelligence}) and magical weapon damage (${weaponSpellDamage})`, () => {
        // when ... we calculate the max spell damage for the provided character class, level, intelligence and magical weapon
        // then ... should return expected values
        const result = SUT.calculateMaxSpellDamage(charClass, charLevel, charIntelligence, weaponSpellDamage)
        assert.strictEqual(result, expected)
      })
    })
  })

  describe('calculateArmourClass', () => {
    parametrize([
      ['barbarian', 1, 1, 100, 107],
      ['barbarian', 10, 14, 200, 295],
      ['barbarian', 10, 8, 200, 265],
      ['barbarian', 20, 20, 200, 445],
      ['wizard', 1, 1, 100, 101],
      ['wizard', 20, 10, 100, 182],
      ['wizard', 20, 20, 200, 382],
      ['rogue', 15, 10, 100, 178],
      ['fighter', 15, 10, 100, 194],
      ['fighter', 15, 20, 100, 269],
      ['fighter', 20, 20, 100, 324],
    ], (charClass, charLevel, charAbility, itemBaseArmour, expected) => {
      it(`should return expected value for armour class calculation for class (${charClass}) at level (${charLevel}) with ability (${charAbility}) and item base armour (${itemBaseArmour})`, () => {
        // when ... we calculate the armour class for provided character class, level, ability and item base armour
        // then ... should return expected values
        const result = SUT.calculateArmourClass(charClass, charLevel, charAbility, itemBaseArmour)
        assert.strictEqual(result, expected)
      })
    })
  })
})
