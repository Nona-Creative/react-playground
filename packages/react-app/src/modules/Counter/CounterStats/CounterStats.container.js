import { connect } from 'react-redux'
import { pipe, pick, evolve, prop, path } from 'ramda'

import { denormalize } from '../../../common/utils/data'
import Component from './CounterStats.component'

const mapStateToProps = (state, ownProps) => ({
  counters: pipe(
    pick(['counters']),
    evolve({
      counters: denormalize('id'),
    }),
    prop('counters'),
  )(state),
  viewCounter: path(['match', 'params', 'viewCounter'], ownProps),
})

const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
