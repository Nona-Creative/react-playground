import Bluebird from 'bluebird'
import { prop } from 'ramda'

import {
  API_URL,
  API_ENDPOINT_COUNTERS,
} from './constants'

export const getCounters = axios => () => (
  Bluebird
    .resolve(axios.get(`${API_URL}${API_ENDPOINT_COUNTERS}`))
    .then((response) => prop('data', response))
    .catch(() => {
      // TODO: add error logging
      return Bluebird.reject(new Error('API Error: could not retrieve counters'))
    })
)
