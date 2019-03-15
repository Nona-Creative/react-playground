import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import { Tooltip } from 'react-tippy'

import './CharacterEquipment.scss'
import ItemCompare from '../ItemCompare'

const CharacterEquipment = ({
  characterEquipment,
  onSelect,
}) => {
  const item = x => R.isNil(x)
    ? (
      <div className="equipment equipment--empty">EMPTY</div>
    )
    : (
      <div className="equipment" onClick={() => onSelect(R.prop('id', x))}>
        <Tooltip animation="fade" arrow="true" theme="light" html={(
          <div>
            <div>click to unequip</div>
            <ItemCompare inventoryItem={x} />
          </div>
        )}>
          <div>
            <span>{ x ? x.label : null }</span>
          </div>
        </Tooltip>
      </div>
    )

  return (
    <div className="CharacterEquipment">
      <div className="column">
        {item(characterEquipment.weapon)}
        {item(characterEquipment.accessory1)}
      </div>
      <div className="column">
        {item(characterEquipment.attire)}
      </div>
      <div className="column">
        {item(characterEquipment.shield)}
        {item(characterEquipment.accessory2)}
      </div>
    </div>
  )
}

CharacterEquipment.propTypes = {
  selectedCharacterId: PropTypes.number.isRequired,
  characterEquipment: PropTypes.shape({
    weapon: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      characterAttributeModifiers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          operator: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        })
      ).isRequired,
    }),
    shield: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      characterAttributeModifiers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          operator: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        })
      ).isRequired,
    }),
    accessory1: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      characterAttributeModifiers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          operator: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        })
      ).isRequired,
    }),
    accessory2: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      characterAttributeModifiers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          operator: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        })
      ).isRequired,
    }),
    attire: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      characterAttributeModifiers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          operator: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        })
      ).isRequired,
    }),
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default CharacterEquipment

