import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import './CharacterAttack.scss'

const attrListItem = (x, i) => (
  <div key={i} className="small">
    {x.operator === 'add'
      ? <span className="green">{x.label}</span>
      : <span className="red">{x.label}</span>
    }
  </div>
)

const CharacterAttack = ({
  weapon,
  maxAttackDamage,
}) => (
  <div className="CharacterAttack">
    <div className="item-cell__max_damage"><strong>Max damage:</strong> {maxAttackDamage}</div>
    <br/>
    {R.isNil(weapon) ? null : (
      <div>
        <div className="item-cell__heading">{weapon.label}</div>
        <div className="item-cell__subheading">{weapon.type}</div>
        <div className="item-cell__attributes">{R.addIndex(R.map)(attrListItem, weapon.characterAttributeModifiers)}</div>
      </div>
    )}
  </div>
)

CharacterAttack.defaultProps = {
  weapon: null,
  maxAttackDamage: null,
}

CharacterAttack.propTypes = {
  selectedCharacter: PropTypes.shape({
    level: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }),
  weapon: PropTypes.shape({
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    damage: PropTypes.number.isRequired,
    characterAttributeModifiers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        operator: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }),
  maxAttackDamage: PropTypes.number,
}

export default CharacterAttack
