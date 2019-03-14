import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as R from 'ramda'

import Component from './CharacterEquipment'
import selector from './CharacterEquipment.selector'
import { unequipItem } from '../Items/Items.reducer'

const mapStateToProps = selector

const mapDispatchToProps = dispatch => ({
  onSelect: R.compose(dispatch, unequipItem),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component))
