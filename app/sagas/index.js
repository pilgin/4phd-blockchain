import { fork } from 'redux-saga/effects'

import { loginFlow, logoutFlow } from './auth';
import { fetchStatsFlow } from './stats'
import { fetchRateFlow } from './rate'
import { transferFlow } from './transfer'
import { fetchUserFlow } from './user'

export default function* root() {
  yield fork(loginFlow)
  yield fork(logoutFlow)
  yield fork(fetchStatsFlow)
  yield fork(fetchRateFlow)
  yield fork(transferFlow)
  yield fork(fetchUserFlow)
}
