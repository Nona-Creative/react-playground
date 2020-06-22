import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import store from './common/redux/store'
import App from './modules/App'
import CounterStats from './modules/Counter/CounterStats'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/stats/:viewCounter?" component={CounterStats} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
