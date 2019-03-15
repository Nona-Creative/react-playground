import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import './ItemCompare.scss'

const attrListItem = (x, i) => (
  <div key={i} className="small">
    {x.operator === 'add'
      ? <span className="green">{x.label}</span>
      : <span className="red">{x.label}</span>
    }
  </div>
)
const attrList = (x, i) => (
  <div key={i} className="ItemCompareCell">
    {R.isNil(x)
      ? (<div className="item-cell__empty">EMPTY</div>)
      : (
        <div>
          <div className="item-cell__heading">{x.label}</div>
          <div className="item-cell__subheading">{x.type}</div>
          <div className="item-cell__attributes">{R.addIndex(R.map)(attrListItem, x.characterAttributeModifiers)}</div>
        </div>
      )
    }
  </div>
)

const ItemCompare = ({
  inventoryItem,
  equippedItems,
}) => (
  <div className="ItemCompare">
    <div className="row">
      {R.length(equippedItems) > 0 ? (
        <div className="col">
          {R.addIndex(R.map)(attrList, equippedItems)}
        </div>
      ) : null}
      {R.isNil(inventoryItem) ? null : (
        <div className="col">
          {attrList(inventoryItem, 0)}
        </div>
      )}
    </div>
  </div>
)

ItemCompare.defaultProps = {
  inventoryItem: null,
  equippedItems: [],
}

ItemCompare.propTypes = {
  inventoryItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    characterAttributeModifiers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        operator: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }),
  equippedItems: PropTypes.arrayOf(
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
        }),
      ).isRequired,
    })
  ),
}

export default ItemCompare
