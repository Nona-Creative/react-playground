import { connect } from 'react-redux'

import { selectCounter } from '../selectedCounter.reducer'
import Component from './CounterList.component'
import { CounterListComponentSelector } from './CounterList.selectors'

const mapStateToProps = CounterListComponentSelector

const mapDispatchToProps = dispatch => ({
  onSelectCounter: id => dispatch(selectCounter(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
