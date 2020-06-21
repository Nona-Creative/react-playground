import { connect } from 'react-redux'

import { incrementCounter, decrementCounter } from '../counters.reducer'
import Component from './CounterDetail.component'
import { CounterDetailComponentSelector } from './CounterDetail.selectors'

const mapStateToProps = CounterDetailComponentSelector

const mapDispatchToProps = dispatch => ({
  onIncrement: (counterId, amount) => dispatch(incrementCounter(counterId, amount)),
  onDecrement: (counterId, amount) => dispatch(decrementCounter(counterId, amount)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
