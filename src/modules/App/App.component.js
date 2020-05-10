import React from 'react'

import './App.css'
import { CounterDetail } from '../Counter'

const Component = () => (
  <div className="App">
    <header className="App__heading">
      REACT Playground
    </header>
    <main className="App__main">
      <CounterDetail />
    </main>
  </div>
)

export default Component
