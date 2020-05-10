import { connect } from 'react-redux'

import { selectCounter } from '../selectedCounter.reducer'
import Component from './CounterList.component'
import componentSelector from './CounterList.selector'

const mapStateToProps = componentSelector

const mapDispatchToProps = dispatch => ({
  onSelectCounter: id => dispatch(selectCounter(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
