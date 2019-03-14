import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Component from './CharacterHP'
import selector from './CharacterHP.selector'

const mapStateToProps = selector
const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component))
