import { createSelector } from 'reselect'
import * as R from 'ramda'

import * as RouterUtils from '../../common/utils/object.utils'
import { pathRoutes } from './App.routes'

const selector = createSelector(
  [
    R.pathOr('', ['location', 'pathname']),
    R.path(['app', 'title']),
  ],
  (
    pathname,
    title,
  ) => ({
    route: RouterUtils.pickByKeyRegex(pathRoutes, pathname),
    title,
  })
)

export default selector
