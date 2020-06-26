import { path, pipe, last, split } from 'ramda'

export const getCounterIdFromPayload = payload => pipe(
  path(['location', 'pathname']),
  split('/'),
  last,
)(payload)
