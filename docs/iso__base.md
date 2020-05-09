# Base

## Basic React setup

##### Entry point

src/index.js

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import AppComponent from './modules/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
```

##### App Component

src/modules/App/App.js

```javascript
import React from 'react'

import './App.css'

const AppComponent = () => (
  <div className="App">
    <header className="App__heading">
      REACT Playground
    </header>
    <main className="App__main">
      ...
    </main>
  </div>
)

export default AppComponent
```

