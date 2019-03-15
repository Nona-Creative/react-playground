import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import './CharacterAttributes.scss'

const CharacterAttributes = ({
  characterAttributes,
}) => {
  const listItemValueModifiers = x => (
    <span>
      {R.has('add', x.groupedModifierValues) ? (
        <span className="add">{x.groupedModifierValues.add}</span>
      ) : null}
      {R.length(R.keys(x.groupedModifierValues)) > 1 ? <span>&nbsp;</span> : null}
      {R.has('subtract', x.groupedModifierValues) ? (
        <span className="red">{x.groupedModifierValues.subtract}</span>
      ) : null}
    </span>
  )
  const listItemValue = x => (
    <span>
      {x.value === x.baseValue
        ? (<span>{x.value}</span>)
        : x.value > x.baseValue
          ? <span className="green">{x.value} <span className="small">({listItemValueModifiers(x)})</span></span>
          : <span className="red">{x.value} <span className="small">({listItemValueModifiers(x)})</span></span>
      }
    </span>
  )
  const listItem = (x, i) => (
    <li className="list-item" key={i}>
      <div className="row">
        <div className="col left label">{x.label}</div>
        <div className="col left value">{listItemValue(x)}</div>
      </div>
    </li>
  )
  return (
    <div className="CharacterAttributes">
      <ul className="list">
        {R.addIndex(R.map)(listItem, characterAttributes)}
      </ul>
    </div>
  )
}

CharacterAttributes.propTypes = {
  selectedCharacterAttributes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  selectedCharacterId: PropTypes.number.isRequired,
  characterAttributes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default CharacterAttributes

