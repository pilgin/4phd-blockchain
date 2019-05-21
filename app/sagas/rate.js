import {take, call, put} from 'redux-saga/effects'

import rateApi from '../api/rate'

import {
  FETCH_RATE,
  UPDATE_RATE,
  FETCH_RATE_ERROR,
  FETCH_RATE_HISTORY,
  UPDATE_RATE_HISTORY,
  FETCH_RATE_HISTORY_ERROR
} from "../actions/rate/constants"

export function* fetchRate() {
  try {
    const response = yield call(rateApi.fetchRate)

    yield put({ type: UPDATE_RATE, data: response.data })
  } catch (error) {
    yield put({ type: FETCH_RATE_ERROR, error: error.message })
  }
}

export function* fetchRateHistory(interval) {
  try {
    const response = yield call(rateApi.fetchRateHistory, interval)

    yield put({ type: UPDATE_RATE_HISTORY, data: response.data })
  } catch (error) {
    yield put({ type: FETCH_RATE_HISTORY_ERROR, error: error.message })
  }
}

export function* fetchRateFlow() {
  while (true) {
    yield take(FETCH_RATE)
    yield call(fetchRate)
  }
}

export function* fetchRateHistoryFlow() {
  while (true) {
    const { interval } = yield take(FETCH_RATE_HISTORY)
    yield call(fetchRateHistory, interval)
  }
}
