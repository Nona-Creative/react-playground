import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter as Router} from 'connected-react-router'

import history from '../../common/redux/history'
import './App.css'
import { CounterList, CounterDetail } from '../Counter'

const Component = () => (
  <div className="App">
    <header className="App__heading">
      REACT Playground
    </header>
    <main className="App__main">
      <Router history={history}>
        <Route exact path="/" component={CounterList}/>
        <Route exact path="/counter/:selectedCounter" component={CounterDetail}/>
      </Router>
    </main>
  </div>
)

export default Component
