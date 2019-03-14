import React from 'react'

import './Inventory.scss'
import Characters from '../Characters'
import Items from '../Items'
import SelectedCharacter from '../SelectedCharacter'

const Inventory = () => (
  <main className="Inventory__main row">
    <div className="col charactersWrap">
      <Characters />
    </div>
    <div className="col selectedCharacterWrap">
      <SelectedCharacter />
    </div>
    <div className="col itemsWrap">
      <Items />
    </div>
  </main>
)

export default Inventory

