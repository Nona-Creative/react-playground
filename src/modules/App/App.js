import React from 'react'
import PropTypes from 'prop-types'

import './App.scss'
import { ROUTE_INVENTORY } from '../Inventory/Inventory.reducer'
import Inventory from '../Inventory'

const App = ({
  route,
}) => {
  const views = {
    [ROUTE_INVENTORY]: <Inventory />,
  }
  return (
    <div className="App">
      <main className="App__main">
        {views[route]}
      </main>
    </div>
  )
}

App.propTypes = {
  route: PropTypes.string.isRequired,
}

export default App

