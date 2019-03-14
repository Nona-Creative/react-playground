import React from 'react'

import './Inventory.scss'
import Characters from '../Characters'
import Items from '../Items'
import SelectedCharacter from '../SelectedCharacter'

const Inventory = () => (
  <main className="Inventory__main row">
    <div className="col">
      <Characters />
    </div>
    <div className="col">
      <SelectedCharacter />
    </div>
    <div className="col">
      <Items />
    </div>
  </main>
)

export default Inventory

