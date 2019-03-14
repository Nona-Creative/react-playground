import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import App from './App'
import selector from './App.selector'

const mapStateToProps = selector

const mapDispatchToProps = null

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App))
