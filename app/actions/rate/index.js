import {
  FETCH_RATE,
  UPDATE_RATE,
  FETCH_RATE_ERROR
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
