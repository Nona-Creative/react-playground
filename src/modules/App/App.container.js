import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import App from './App'

const mapStateToProps = () => null
const mapDispatchToProps = null

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App))
