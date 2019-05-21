import {
  FETCH_RATE,
  UPDATE_RATE,
  FETCH_RATE_ERROR,
  FETCH_RATE_HISTORY,
  UPDATE_RATE_HISTORY,
  FETCH_RATE_HISTORY_ERROR,
} from './constants'

export function fetchRate() {
  return { type: FETCH_RATE }
}

export function updateRate() {
  return { type: UPDATE_RATE, data }
}

export function fetchRateError() {
  return { type: FETCH_RATE_ERROR }
}

export function fetchRateHistory(interval) {
  return { type: FETCH_RATE_HISTORY, interval }
}

export function updateRateHistory() {
  return { type: UPDATE_RATE_HISTORY, data }
}

export function fetchRateHistoryError() {
  return { type: FETCH_RATE_HISTORY_ERROR }
}
