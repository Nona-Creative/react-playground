import { connect } from 'react-redux'
import { pipe, pick, evolve } from 'ramda'

import { denormalize } from '../../../common/utils/data'
import { navigateToSelectedCounter } from '../counters.reducer'
import Component from './CounterList.component'

const mapStateToProps = pipe(
  pick(['counters']),
  evolve({
    counters: denormalize('id'),
  }),
)

const mapDispatchToProps = dispatch => ({
  onSelectCounter: id => dispatch(navigateToSelectedCounter(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
