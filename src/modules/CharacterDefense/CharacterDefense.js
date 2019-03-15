import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import './CharacterDefense.scss'

const attrListItem = (x, i) => (
  <div key={i} className="small">
    {x.operator === 'add'
      ? <span className="green">{x.label}</span>
      : <span className="red">{x.label}</span>
    }
  </div>
)

const CharacterDefense = ({
  armours,
  armourClass,
}) => (
  <div className="CharacterDefense">
    <div className="item-cell__max_damage"><strong>Armour class:</strong> {armourClass}</div>
    <br/>
    {R.addIndex(R.map)((x, i) => (
      <div key={i}>
        <div className="item-cell__heading">{x.label}</div>
        <div className="item-cell__subheading">{x.type}</div>
        <div className="item-cell__attributes">{R.addIndex(R.map)(attrListItem, x.characterAttributeModifiers)}</div>
      </div>
    ))(armours)}
  </div>
)

CharacterDefense.defaultProps = {
  selectedCharacter: null,
  armours: [],
  armourClass: null,
}

CharacterDefense.propTypes = {
  selectedCharacter: PropTypes.shape({
    level: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }),
  armours: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
  armourClass: PropTypes.number,
}

export default CharacterDefense
