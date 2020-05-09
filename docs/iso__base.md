# Base

## Basic React setup

##### src/index.js

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

\`;

##### src/modules/App/App.js

```javascript
import React from 'react'

import './App.css'

const App = () => (
  <div className="App">
    <header className="App__heading">
      REACT Playground
    </header>
    <main className="App__main">
      A minimal React project for experimenting and refining ideas / solutions
    </main>
  </div>
)

export default App
```

\`;

