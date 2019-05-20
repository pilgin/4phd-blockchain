import { combineReducers } from 'redux'

import auth from './auth'
import stats from './stats'
import rate from './rate'
import transfer from './transfer'
import user from './user'

export default combineReducers({
  auth,
  stats,
  rate,
  transfer,
  user
})
