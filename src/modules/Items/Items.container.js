import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Component from './Items'
import selector from './Items.selector'
import { equipItem } from './Items.reducer'

const mapStateToProps = selector

const mapDispatchToProps = dispatch => ({
  onSelect: (characterId, itemId) => dispatch(equipItem(characterId, itemId)),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component))
