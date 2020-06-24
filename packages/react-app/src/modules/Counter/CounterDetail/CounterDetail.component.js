import React from 'react'
import PropTypes from 'prop-types'
import { isNil, or } from 'ramda'

import './CounterDetail.css'

const Component = ({ onIncrement, onDecrement, counterId, count, label, onNavigateToOverview }) => {
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
      <footer>
        <button
          onClick={onNavigateToOverview}
          type="button"
        >Overview</button>
      </footer>
    </div>
  )
}

Component.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onNavigateToOverview: PropTypes.func.isRequired,
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

