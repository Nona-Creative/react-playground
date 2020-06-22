import React from 'react'
import { prop, map, pipe, propEq, find, isNil } from 'ramda'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CounterStats = ({ counters, viewCounter }) => {
  const allCounters = (
    <ul>
      { map(counter => (
        <li key={prop('label', counter)}>{`${prop('label', counter)}: ${prop('count', counter)}`}</li>
      ))(counters) }
    </ul>
  )

  const singleCounter = (
    <div data-testid="counter-div">
      { pipe(
        find(propEq('id', viewCounter)),
        x => `${prop('label', x)}: ${prop('count', x)}`,
      )(counters) }
    </div>
  )

  return (
    <div>
      <header>
        Counter Stats for { viewCounter || 'all counters'}
        { isNil(viewCounter) ? allCounters : singleCounter }
      </header>
      <hr/>
      <Link to="/">Resume Counting</Link>
    </div>
  )
}

CounterStats.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.shape({
    count: PropTypes.number,
    label: PropTypes.string,
  })).isRequired,
  viewCounter: PropTypes.string,
}

CounterStats.defaultProps = {
  viewCounter: null,
}

export default CounterStats
