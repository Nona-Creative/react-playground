import React from 'react'
import PropTypes from 'prop-types'

import './Counter.css'

const Component = ({ onIncrement, onDecrement, count }) => (
  <div className="Counter">
    <header className="Counter__heading">
      Counter
    </header>
    <main className="Counter__main">
      {count}
      <button
        className="button button__decrement"
        data-testid="button-decrement"
        onClick={() => onDecrement(1)}
      >-</button>
      <button
        className="button button__increment"
        data-testid="button-increment"
        onClick={() => onIncrement(1)}
      >+</button>
    </main>
  </div>
)

Component.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  count: PropTypes.number,
}

Component.defaultProps = {
  count: 0,
}

export default Component

