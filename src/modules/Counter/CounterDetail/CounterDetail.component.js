import React from 'react'
import PropTypes from 'prop-types'

import './CounterDetail.css'

const Component = ({ onIncrement, onDecrement, count }) => {
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
        onClick={() => onDecrement(1)}
      >-</button>
      <button
        type="button"
        className="button button__increment"
        data-testid="button-increment"
        onClick={() => onIncrement(1)}
      >+</button>
    </>
  )

  return (
    <div className="CounterDetail">
      <header className="CounterDetail__heading">
        Counter
      </header>
      <main className="CounterDetail__main">
        {count === null ? noSelectedCounterView : selectedCounterView}
      </main>
    </div>
  )
}

Component.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  count: PropTypes.number,
}

Component.defaultProps = {
  count: null,
}

export default Component

