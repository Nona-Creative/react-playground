import { connect } from 'react-redux'
import { applySpec, prop } from 'ramda'

import Component from './Counter.component'
import { incrementCounter, decrementCounter } from './Counter.reducer'

const mapStateToProps = applySpec({
  count: prop('counter'),
})

const mapDispatchToProps = dispatch => ({
  onIncrement: n => dispatch(incrementCounter(n)),
  onDecrement: n => dispatch(decrementCounter(n)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
