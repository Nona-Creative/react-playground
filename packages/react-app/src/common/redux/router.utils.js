import { path, pipe, last, split } from 'ramda'

export const getLastParamFromRouterState = pipe(
  path(['location', 'pathname']),
  split('/'),
  last,
)
