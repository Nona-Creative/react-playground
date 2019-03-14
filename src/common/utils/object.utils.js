import * as R from 'ramda'

const _pickByKeyRegex = (views, route) => (
  R.compose(
    R.ifElse(R.isEmpty, R.always(null), R.head),
    R.values,
    R.pickBy((val, key) => R.test(new RegExp(key), route)),
  )(views)
)

export const pickByKeyRegex = R.curry(_pickByKeyRegex)
