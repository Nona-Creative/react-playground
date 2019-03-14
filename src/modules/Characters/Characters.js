import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import './Characters.scss'

const Characters = ({
  characters,
  selectedCharacterIndex,
  onSelect,
}) => {
  const listItem = (x, i) => (
    <li className={`list-item${i === selectedCharacterIndex ? ' list-item--selected' : ''}`} key={i}>
      <div className="link" onClick={() => onSelect(R.prop('id', x))}>
        <div className="Character__portrait-small character-portrait">
          <img src="http://www.thain.org/forum/e107_files/public/118_caspian.jpg" />
        </div>
        <div>{x.label}</div>
      </div>
    </li>
  )
  return (
    <div className="Characters">
      <ul className="list">
        {R.addIndex(R.map)(listItem, characters)}
      </ul>
    </div>
  )
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedCharacterIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default Characters

