import { compose, mapObjIndexed, values, assoc } from 'ramda'

export const denormalize = keyProp => compose(
  values,
  mapObjIndexed((value, key) => assoc(keyProp, key, value)),
)
