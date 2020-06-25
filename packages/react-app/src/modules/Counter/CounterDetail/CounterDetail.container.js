import { connect } from 'react-redux'
import { path } from 'ramda'

import Component from './CounterDetail.component'
import { incrementCounter, decrementCounter, navigateToCounters } from '../counters.reducer'

const mapStateToProps = (state, ownProps) => {
  const selectedCounter = path(['match', 'params', 'selectedCounter'], ownProps)
  const count = path(['counters', selectedCounter, 'count'], state)
  const label = path(['counters', selectedCounter, 'label'], state)
  return {
    counterId: parseInt(selectedCounter, 10),
    count,
    label,
  }
}

const mapDispatchToProps = dispatch => ({
  onIncrement: (counterId, amount) => dispatch(incrementCounter(counterId, amount)),
  onDecrement: (counterId, amount) => dispatch(decrementCounter(counterId, amount)),
  onBack: () => dispatch(navigateToCounters()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
