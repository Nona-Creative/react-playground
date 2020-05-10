import { connect } from 'react-redux'
import { prop, pathOr } from 'ramda'

import Component from './CounterDetail.component'
import { incrementCounter, decrementCounter } from '../counters.reducer'

const mapStateToProps = (state) => {
  const selectedCounter = prop('selectedCounter', state)
  const count = pathOr(null, ['counters', selectedCounter, 'count'], state)
  return { count }
}

const mapDispatchToProps = dispatch => ({
  onIncrement: n => dispatch(incrementCounter(n)),
  onDecrement: n => dispatch(decrementCounter(n)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
