import React from 'react'
import PropTypes from 'prop-types'
import { isNil } from 'ramda'
import { Link } from 'react-router-dom'

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
    >{label} :: 
      <Link to={`/stats/${id}`}>View Count</Link>
    </li>
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

