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

