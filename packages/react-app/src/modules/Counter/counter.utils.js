import { path, pipe, last, split } from 'ramda'

export const getCounterIdFromPayload = pipe(
  path(['location', 'pathname']),
  split('/'),
  last,
)
