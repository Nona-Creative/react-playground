import Axios from 'axios'

import { getCounters } from './counters'

export default {
  getCounters: getCounters(Axios),
}
