import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Component from './CharacterDefense'
import selector from './CharacterDefense.selector'

const mapStateToProps = selector
const mapDispatchToProps = null

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component))
