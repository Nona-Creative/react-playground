import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import './CharacterDefense.scss'

const attrListItem = (x, i) => (
  <div key={i}>
    {x.operator === 'add'
      ? <span className="green">{x.label}</span>
      : <span className="red">{x.label}</span>
    }
  </div>
)

const CharacterDefense = ({
  armour,
  armourClass,
}) => (
  <div className="CharacterDefense">
    <div className="item-cell__heading">{armour.label}</div>
    <div className="item-cell__subheading">{armour.type}</div>
    <div className="item-cell__attributes">{R.addIndex(R.map)(attrListItem, armour.characterAttributeModifiers)}</div>
    <div className="item-cell__max_damage"><strong>Armour class:</strong> {armourClass}</div>
  </div>
)

CharacterDefense.defaultProps = {
  armour: {},
  armourClass: null,
}

CharacterDefense.propTypes = {
  selectedCharacter: PropTypes.shape({
    level: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }),
  armour: PropTypes.shape({
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    armour: PropTypes.number.isRequired,
    characterAttributeModifiers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        operator: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }),
  armourClass: PropTypes.number,
}

export default CharacterDefense
