import React from 'react'
import PropTypes from 'prop-types'
import Link from 'redux-first-router-link'

import './App.scss'
import Home from '../Home'
import { ROUTE_HOME, routeHome } from '../Home/Home.reducer'

const App = ({
  route,
  title,
}) => {
  const views = {
    [ROUTE_HOME]: <Home />,
  }
  return (
    <div className="App">
      <header className="App__heading">{title}</header>
      <nav className="App__nav nav">
        <ul>
          <li className="nav-item"><Link to={routeHome()}>Home</Link></li>
        </ul>
      </nav>
      <main className="App__main">
        {views[route]}
      </main>
    </div>
  )
}

App.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default App

