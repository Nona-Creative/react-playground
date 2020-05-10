# Base

## Basic React setup

##### Entry point

src/index.js

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './modules/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
```

##### App Component

src/modules/App/App.component.js

```javascript
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
```

