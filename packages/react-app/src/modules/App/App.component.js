import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'
import { CounterList, CounterDetail } from '../Counter'

const Component = () => (
  <div className="App">
    <header className="App__heading">
      REACT Playground
    </header>
    <main className="App__main">
      <CounterList />
      <CounterDetail />
      <hr/>
      <Link to="/stats">View All Counts</Link>
    </main>
  </div>
)

export default Component
