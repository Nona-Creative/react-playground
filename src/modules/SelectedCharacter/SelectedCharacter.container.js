import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Component from './SelectedCharacter'
import selector from './SelectedCharacter.selector'

const mapStateToProps = selector
const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component))
