import React from 'react'
import PropTypes from 'prop-types'

import './CharacterHP.scss'

const CharacterHP = ({
  hitPoints,
  maxHitPoints,
}) => (
  <div className="CharacterHP">HP {hitPoints}/{maxHitPoints}</div>
)

CharacterHP.defaultProps = {
  selectedCharacter: null,
}

CharacterHP.propTypes = {
  selectedCharacter: PropTypes.shape({
    level: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }),
  hitPoints: PropTypes.number.isRequired,
  maxHitPoints: PropTypes.number.isRequired,
}

export default CharacterHP
