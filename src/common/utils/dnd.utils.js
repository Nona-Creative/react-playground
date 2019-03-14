import * as R from 'ramda'

const charClassHitDieMap = {
  sorcerer: 6,
  wizard: 6,
  bard: 8,
  cleric: 8,
  druid: 8,
  monk: 8,
  rogue: 8,
  warlock: 8,
  fighter: 10,
  paladin: 10,
  ranger: 10,
  barbarian: 12,
}

const charClassBaseAttackBonusMap = {
  wizard: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
  rogue: [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
  fighter: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
}

//---------------------------------
// common
//---------------------------------

export const calculateAbilityModifier = abilityValue => (
  Math.floor((abilityValue - 10) / 2)
)

//---------------------------------
// HP
//---------------------------------

export const calculateMaxHPAtLevel = (charConsitution, highestPossibleRoll, constitutionMod) => acc => {
  const avgRoll = (highestPossibleRoll / 2) + 1
  const increase = (avgRoll + constitutionMod)
  return acc + (increase > 0 ? increase : 1)
}

export const calculateMaxHP = (charClass, charLevel, charConstitution) => {
  const hitDie = charClassHitDieMap[charClass]
  const abilityModifier = calculateAbilityModifier(charConstitution)
  return R.reduce(
    calculateMaxHPAtLevel(charConstitution, hitDie, abilityModifier),
    hitDie + abilityModifier,
    R.repeat(1, charLevel - 1),
  )
}

//---------------------------------
// Weapon Damage
//---------------------------------

export const getBaseAttackBonusForClassAtLevel = (charClass, charLevel) => (
  R.compose(
    R.prop(charLevel - 1),
    R.prop(charClass),
  )(charClassBaseAttackBonusMap)
)

export const calculateMaxWeaponDamage = (charClass, charLevel, charAbility, weaponDamage) => {
  const hitDie = charClassHitDieMap[charClass]
  const abilityModifier = calculateAbilityModifier(charAbility)
  return R.reduce(
    calculateMaxHPAtLevel(charAbility, hitDie, abilityModifier),
    weaponDamage + hitDie + abilityModifier,
    R.repeat(1, charLevel - 1),
  )
}

//---------------------------------
// Spell Damage
//---------------------------------

export const calculateMaxSpellDamage = (charClass, charLevel, charIntelligence, weaponSpellDamage) => {
  const hitDie = charClassHitDieMap[charClass]
  const invertedhitDie = 6 + 12 - hitDie
  const abilityModifier = calculateAbilityModifier(charIntelligence)
  return R.reduce(
    calculateMaxHPAtLevel(charIntelligence, invertedhitDie, abilityModifier),
    weaponSpellDamage + invertedhitDie + abilityModifier,
    R.repeat(1, charLevel - 1),
  )
}

//---------------------------------
// Armour Class
//---------------------------------

export const calculateArmourClass = (charClass, charLevel, charAbility, itemBaseArmour) => {
  const hitDie = charClassHitDieMap[charClass]
  const abilityModifier = calculateAbilityModifier(charAbility)
  return R.reduce(
    calculateMaxHPAtLevel(charAbility, hitDie, abilityModifier),
    itemBaseArmour + hitDie + abilityModifier,
    R.repeat(1, charLevel - 1),
  )
}
