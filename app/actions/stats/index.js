import {
  FETCH_STATS,
  FETCH_STATS_ERROR
} from './constants'

export function fetchStats() {
  return { type: FETCH_STATS }
}

export function fetchStatsError() {
  return { type: FETCH_STATS_ERROR }
}
