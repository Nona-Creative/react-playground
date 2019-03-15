Root state
---

 - characters
 - selectedCharacterId
 - characterAttributes
 - items

Derived state
---

 - CharacterAttack
   - weapon (weapon equipped by character)
   - maxAttackDamage (calculated max weapon attack damage for selected character)
 - CharacterAttributes
   - characterAttributes (selected character attributes modified by equipped items)
 - CharacterDefense
   - armours (armour items equipped by character)
   - armourClass : use ``calculateArmourClass`` in ``src/common/utils/dnd.utils.js`` (calculated armour class for selected character)
 - CharacterEquipment
   - characterEquipment (items equipped by selected character)
     - weapon
     - shield
     - accessory1
     - accessory2
     - attire
 - CharacterHP
   - hitPoints (current health of character)
   - maxHitPoints(calculated max hit points selected character) 
 - Characters
   - characters (list of available characters)
   - selectedCharacterIndex (index of selected character)
 - Items
   - selectedCharacterId
   - items (list of all unequipped items, with an allowEquip prop set based on whether the selected character has an available slot for the item type)
   - characterEquipment (items currently equipped by character
 - SelectedCharacter
   - selectedCharacter

Selectors
---

> TDD the following selectors:
> (see each module's component PropTypes for more details)
> NOTE: you can reuse/compose selectors

### CharacterAttack
 - weapon (weapon equipped by character)
   - maxAttackDamage : use ``calculateMaxWeaponDamage`` in ``src/common/utils/dnd.utils.js`` (calculated max weapon attack damage for selected character)

### CharacterAttributes
 - selectedCharacterId
 - characterAttributes (selected character attributes modified by equipped items)

### CharacterDefense
 - armours (armour items equipped by character)
 - armourClass : use ``calculateArmourClass`` in ``src/common/utils/dnd.utils.js`` (calculated armour class for selected character)
 
### CharacterEquipment
 - characterEquipment (items equipped by selected character)
   - weapon
   - shield
   - accessory1
   - accessory2
   - attire

### CharacterHP
 - hitPoints (current health of character, currently always 60, use whatever you want)
 - maxHitPoints : use ``calculateMaxHP`` in ``src/common/utils/dnd.utils.js`` (calculated max hit points selected character) 

### Characters
 - characters (list of available characters)
 - selectedCharacterIndex (index of selected character)

### Items
 - selectedCharacterId
 - items (list of all unequipped items, with an allowEquip prop set based on whether the selected character has an available slot for the item type)
 - characterEquipment (items currently equipped by character

### SelectedCharacter
 - selectedCharacter

Reducers
---

> TDD the following reducers:

### Items

 - action: ``EQUIP_ITEM``, reducer should set the the characterId of the provided item to provided character
 - action: ``UNEQUIP_ITEM``, reducer should set the the characterId of the provided item to null

### SelectedCharacter

 - action: ``SELECT_CHARACTER``, reducer should set state to provide id


Coding challenge
---

complete ``calculateMaxHP`` in ``src/common/utils/dnd.utils.js``
by making the ``calculateMaxHP`` tests in ``src/common/utils/dnd.utils.test.js`` pass

### instructions

##### Terminology

The first thing you need to know about to calculate max HP is the "Constitution modifier". Each DND character has six integer ability scores, including one for Constitution. The only relevant knowledge required for this challenge is how the Constitution ability score affects another stat, which is the Constitution modifier. In short, the modifier is equal to floor( (ability_score - 10) / 2 ). Adventurers can only have ability scores from 1 to 20, inclusive. Your code will never have to handle scores outside that range, which also means it will never have to handle a modifier lower than -5 or greater than +5. Though the Constitution modifier can change as a character levels up, its effects on HP are applied retroactively, so only its current value is needed to calculate current max HP.

> (This is entirely irrelevant to the challenge, but if you're curious about how it affects maximum HP: You can assume the "Tough" feat adds 2 to a character's Constitution modifier for the purposes of HP calculation, since that's effectively what it does. That's not the text of the feat but the math works out to be exactly the same. You don't have to handle this feat in your answer.)

Next, every class has an assigned "hit die" type, which is involved in calculating HP. The following table lists the hit dice for each class.

 - Sorcerer:  d6
 - Wizard:    d6
 - Bard:      d8
 - Cleric:    d8
 - Druid:     d8
 - Monk:      d8
 - Rogue:     d8
 - Warlock:   d8
 - Fighter:   d10
 - Paladin:   d10
 - Ranger:    d10
 - Barbarian: d12

Finally, the character's level. All that this affects is how many times to add a value to the running total in the following section. A character's level is an integer from 1 to 20, inclusive1. Your code will never have to handle a level outside that range. To reach level n, a character starts at level 1 and levels up  n-1 times. For example, a level 3 character got to where they are by being a level 1 character and levelling up twice.

##### How to Calculate Max HP
A character's maximum HP is equal to their HP at level 1 plus the sum of the increase they received at each level.

##### At level 1
At level 1, a character's HP is equal to the highest possible roll on their hit die (the number in the name of the die, for those of you unfamiliar with dice that have more than 6 sides) plus their Constitution modifier. Remember that when calculating HP at a later level, you may assume a character's Constitution has always been the same, as this part of the calculation is re-done every time Constitution changes.

##### When levelling up
Every time a character levels up, they have two options. They may either roll one of their hit dice or take the average roll of that die (rounded up). Whichever they choose, their Constitution modifier is added to the result. This total is the amount that their HP increases. For this challenge, the average roll is always taken, so output is deterministic. (Again, if you're not familiar with >6 sided dice, you can calculate the rounded-up average roll as (highest_possible_roll / 2) + 1.)

There is one notable exception. A character's maximum HP always increases by at least 1 each time they level up2. If the instructions in the above paragraph would result in an increase of 0 or less when leveling up, it increases by 1 instead.

##### The Challenge
Your program or function will take three inputs:

 1. The character's class, as a string
 2. The character's level
 3. The character's Constitution ability score (not modifier)

It will output only one thing: The character's current maximum HP.

### EXTRA: Research + Coding challenge

go forth and figure out a better way to implement and test the following functions in ``src/common/utils/dnd.utils.js``:
 - ``calculateArmourClass``
 - ``calculateMaxWeaponDamage``
 - ``calculateMaxSpellDamage``
