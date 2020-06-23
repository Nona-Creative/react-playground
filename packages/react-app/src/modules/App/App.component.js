import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import { CounterList, CounterDetail } from '../Counter'

const Component = () => (
  <div className="App">
    <header className="App__heading">
      REACT Playground
    </header>
    <main className="App__main">
      <Router>
        <Route exact path="/" component={CounterList}/>
        <Route exact path="/counter/:selectedCounter" component={CounterDetail}/>
      </Router>
    </main>
  </div>
)

export default Component
