import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import { Tooltip } from 'react-tippy'

import './Items.scss'
import ItemCompare from '../ItemCompare'
import { itemTypeEquipmentSlots } from '../CharacterEquipment/CharacterEquipment.constants'

const extractMatchingEquippedItems = (characterEquipment) => R.compose(
  R.values,
  R.flip(R.pick)(characterEquipment),
  y => R.propOr([], y, itemTypeEquipmentSlots),
  R.prop('type'),
)

const Items = ({
  selectedCharacterId,
  items,
  characterEquipment,
  onSelect,
}) => {
  const listItem = (x, i) => (
    <li className="item" key={i}>
      <Tooltip animation="fade" arrow="true" theme="light" html={(
        <ItemCompare
          inventoryItem={x}
          equippedItems={extractMatchingEquippedItems(characterEquipment)(x)}
        />
      )}>
        <div
          className="itemItem"
          onClick={() => onSelect(selectedCharacterId, R.prop('id', x))}
        >{x.label}</div>
      </Tooltip>
    </li>
  )
  return (
    <div className="Items">
      <ul className="list">
        {R.addIndex(R.map)(listItem, items)}
      </ul>
    </div>
  )
}

Items.defaultProps = {
  characterEquipment: {},
}

Items.propTypes = {
  selectedCharacterId: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
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
  }),
  onSelect: PropTypes.func.isRequired,
}

export default Items

