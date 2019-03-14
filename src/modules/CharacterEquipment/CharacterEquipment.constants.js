import { itemTypes } from '../Items/Items.constants'

export const equipmentSlotItemTypes = {
  weapons: [
    itemTypes.WEAPON_MELEE,
    itemTypes.WEAPON_RANGED,
    itemTypes.WEAPON_MAGICAL,
  ],
  shields: [itemTypes.SHIELD],
  accessories: [itemTypes.ACCESSORY],
  attire: [itemTypes.ATTIRE],
}

export const itemTypeEquipmentSlots = {
  [itemTypes.WEAPON_MELEE]: ['weapon'],
  [itemTypes.WEAPON_RANGED]: ['weapon'],
  [itemTypes.WEAPON_MAGICAL]: ['weapon'],
  [itemTypes.SHIELD]: ['shield'],
  [itemTypes.ACCESSORY]: ['accessory1', 'accessory2'],
  [itemTypes.ATTIRE]: ['attire'],
}

export const weaponTypesCharacterAbility = {
  [itemTypes.WEAPON_MELEE]: 1,
  [itemTypes.WEAPON_RANGED]: 2,
  [itemTypes.WEAPON_MAGICAL]: null,
}
