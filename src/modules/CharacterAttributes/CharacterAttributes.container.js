import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Component from './CharacterAttributes'
import selector from './CharacterAttributes.selector'

const mapStateToProps = selector
const mapDispatchToProps = null

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component))
