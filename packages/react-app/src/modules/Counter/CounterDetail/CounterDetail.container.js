import { connect } from 'react-redux'
import { path, prop } from 'ramda'

import Component from './CounterDetail.component'
import { incrementCounter, decrementCounter, navigateToCounters } from '../counters.reducer'

const mapStateToProps = (state) => {
  const selectedCounter = prop('selectedCounter', state)
  const count = path(['counters', selectedCounter, 'count'], state)
  const label = path(['counters', selectedCounter, 'label'], state)
  return {
    counterId: selectedCounter,
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
