# Base

## Design

### feature module structure

> Goal is a structure that allows as much decoupling between feature modules as possible

```text
+-- modules
    +-- App
    +-- Counter
        +-- CounterDetail ... detail view
        +-- CounterSummary ... summary view (used in list view)
        +-- Counters ... list view
        +-- ... common files
        +-- ... redux files
```

## Code

##### Entry point

src/index.js

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import store from './common/redux/store'
import App, { appInit } from './modules/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// initial actions
store.dispatch(appInit())
```

##### App Component

src/modules/App/App.component.js

```javascript
import React from 'react'

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
    </main>
  </div>
)

export default Component
```

###### Counter module

src/modules/Counter/CounterSummary/CounterSummary.component.js

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import { isNil } from 'ramda'

import './CounterSummary.css'

const CounterSummary = ({ onSelect, id, label }) => {
  const emptyView = (
    <div>...</div>
  )

  /* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
  const populatedView = (
    <li
      className="CounterSummary"
      key={id}
      role="listbox"
      tabIndex={-1}
      onClick={() => onSelect(id)}
      onKeyDown={() => onSelect(id)}
    >{label}</li>
  )
  /* eslint-enable jsx-a11y/no-noninteractive-element-to-interactive-role */

  return isNil(id) ? emptyView : populatedView
}

CounterSummary.propTypes = {
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
}

CounterSummary.defaultProps = {
  id: null,
  label: '',
}

export default CounterSummary
```

src/modules/Counter/CounterList/CounterList.component.js

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import { map, isEmpty } from 'ramda'

import './CounterList.css'
import CounterSummary from '../CounterSummary/CounterSummary.component'

const CounterList = ({ onSelectCounter, counters }) => {
  const emptyView = (
    <div>...</div>
  )

  const populatedView = (
    <ul>
      {map(({ id, label }) => (
        <CounterSummary
          key={id}
          id={id}
          label={label}
          onSelect={onSelectCounter}
        />
      ), counters)}
    </ul>
  )

  return (
    <div className="CounterList">
      <header className="CounterList__heading">
        Counters
      </header>
      <main className="CounterList__main">
        {isEmpty(counters) ? emptyView : populatedView}
      </main>
    </div>
  )
}

CounterList.propTypes = {
  onSelectCounter: PropTypes.func.isRequired,
  counters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  })),
}

CounterList.defaultProps = {
  counters: [],
}

export default CounterList
```

src/modules/Counter/CounterDetail/CounterDetail.component.js

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import { isNil, or } from 'ramda'

import './CounterDetail.css'

const Component = ({ onIncrement, onDecrement, counterId, count, label }) => {
  const noSelectedCounterView = (
    <div>...</div>
  )

  const selectedCounterView = (
    <>
      {count}
      <button
        type="button"
        className="button button__decrement"
        data-testid="button-decrement"
        onClick={() => onDecrement(counterId, 1)}
      >-</button>
      <button
        type="button"
        className="button button__increment"
        data-testid="button-increment"
        onClick={() => onIncrement(counterId, 1)}
      >+</button>
    </>
  )

  return (
    <div className="CounterDetail">
      <header className="CounterDetail__heading">
        {label}
      </header>
      <main className="CounterDetail__main">
        {or(isNil(counterId), isNil(count)) ? noSelectedCounterView : selectedCounterView}
      </main>
    </div>
  )
}

Component.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  counterId: PropTypes.number,
  count: PropTypes.number,
  label: PropTypes.string,
}

Component.defaultProps = {
  counterId: null,
  count: null,
  label: '',
}

export default Component
```

