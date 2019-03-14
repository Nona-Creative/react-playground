import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as R from 'ramda'

import Component from './Characters'
import selector from './Characters.selector'
import { selectCharacter } from './Characters.reducer'

const mapStateToProps = selector
const mapDispatchToProps = dispatch => ({
  onSelect: R.compose(dispatch, selectCharacter),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component))
