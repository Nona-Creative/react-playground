import { createSelector } from 'reselect'
import * as R from 'ramda'

import * as RouterUtils from '../../common/utils/object.utils'
import { pathRoutes } from './App.routes'

const selector = createSelector(
  [
    R.pathOr('', ['location', 'pathname']),
  ],
  (
    pathname,
  ) => ({
    route: RouterUtils.pickByKeyRegex(pathRoutes, pathname),
  })
)

export default selector
