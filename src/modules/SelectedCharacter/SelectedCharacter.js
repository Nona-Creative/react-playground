import React from 'react'
import PropTypes from 'prop-types'

import './SelectedCharacter.scss'
import CharacterAttributes from '../CharacterAttributes'
import CharacterEquipment from '../CharacterEquipment'
import CharacterHP from '../CharacterHP'
import CharacterAttack from '../CharacterAttack'
import CharacterDefense from '../CharacterDefense'

const SelectedCharacter = ({
  selectedCharacter,
}) => selectedCharacter ? (
  <div className="SelectedCharacter">
    <div className="SelectedCharacter__header">
      <h1>{selectedCharacter.label}</h1>
      <h2>LEVEL {selectedCharacter.level}</h2>
      <h2>{selectedCharacter.class}</h2>
    </div>
    <div className="SelectedCharacter__main row">
      <div className="col left">
        <div className="SelectedCharacter__portrait character-portrait">
          <img src={selectedCharacter.portrait} />
        </div>
      </div>
      <div className="col left">
        <CharacterEquipment />
      </div>
    </div>
    <div className="SelectedCharacter__meta row">
      <div className="col left">
        <CharacterAttributes
          selectedCharacterAttributes={selectedCharacter.attributes}
        />
      </div>
      <div className="col left">
        <CharacterHP selectedCharacter={selectedCharacter} />
        <div className="row">
          <div className="col">
            <h3>Attack</h3>
            <CharacterAttack selectedCharacter={selectedCharacter} />
          </div>
          <div className="col">
            <h3>Defence</h3>
            <CharacterDefense selectedCharacter={selectedCharacter} />
          </div>
        </div>
      </div>
    </div>
  </div>
) : null

SelectedCharacter.defaultProps = {
  selectedCharacter: null,
}

SelectedCharacter.propTypes = {
  selectedCharacter: PropTypes.shape({
    id: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    attributes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }),
}

export default SelectedCharacter

