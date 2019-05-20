import {all, take, call, put} from 'redux-saga/effects'

import statsApi from '../api/stats'

import {
  FETCH_STATS,
  UPDATE_STATS,
  UPDATE_TEAM_STATS,
  FETCH_STATS_ERROR
} from "../actions/stats/constants";

export function* fetchStats() {
  try {
    const [response, teamResponse] = yield all([
        call(statsApi.fetchStats),
        call(statsApi.fetchTeamStats)
    ])

    yield all([
      put({ type: UPDATE_STATS, data: response.data }),
      put({ type: UPDATE_TEAM_STATS, data: teamResponse.data })
    ])
  } catch (error) {
    yield put({ type: FETCH_STATS_ERROR, error: error.message })
  }
}

export function* fetchStatsFlow() {
  while (true) {
    yield take(FETCH_STATS)
    yield call(fetchStats)
  }
}
