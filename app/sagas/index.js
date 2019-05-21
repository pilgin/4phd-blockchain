import { fork } from 'redux-saga/effects'

import { loginFlow, logoutFlow, registerFlow } from './auth'
import { fetchStatsFlow } from './stats'
import { fetchRateFlow, fetchRateHistoryFlow } from './rate'
import { transferFlow } from './transfer'
import { fetchUserFlow } from './user'
import { fetchBotnetFlow } from './botnet'

export default function* root() {
  yield fork(loginFlow)
  yield fork(logoutFlow)
  yield fork(registerFlow)
  yield fork(fetchStatsFlow)
  yield fork(fetchRateFlow)
  yield fork(fetchRateHistoryFlow)
  yield fork(transferFlow)
  yield fork(fetchUserFlow)
  yield fork(fetchBotnetFlow)
}
