import React from 'react'

import './App.css'
import { CounterList, CounterDetail } from '../Counter'

const onSelectCounter = () => null
const onIncrement = () => null
const onDecrement = () => null

const counters = [
  { id: '1', label: 'COUNTER 1', count: 5 },
  { id: '2', label: 'COUNTER 2', count: 10 },
  { id: '3', label: 'COUNTER 3', count: 15 },
]

const Component = () => (
  <div className="App">
    <header className="App__heading">
      REACT Playground
    </header>
    <main className="App__main">
      <CounterList
        onSelectCounter={onSelectCounter}
        counters={counters}
      />
      <CounterDetail
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        counterId={2}
        count={10}
        label="COUNTER 2"
      />
    </main>
  </div>
)

export default Component
