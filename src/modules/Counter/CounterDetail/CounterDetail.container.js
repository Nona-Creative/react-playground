import { connect } from 'react-redux'
import { prop, path } from 'ramda'

import Component from './CounterDetail.component'
import { incrementCounter, decrementCounter } from '../counters.reducer'

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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
