import {
  FETCH_STATS,
  UPDATE_STATS,
  UPDATE_TEAM_STATS,
  FETCH_STATS_ERROR
} from '../actions/stats/constants'

const statsState = {
  data: [],
  teamData: {}
}

export default function auth(state = statsState, action) {
  switch (action.type) {
    case FETCH_STATS:
      return {...state}
    case UPDATE_STATS:
      return {...state, data: action.data }
    case UPDATE_TEAM_STATS:
      return {...state, teamData: action.data }
    case FETCH_STATS_ERROR:
      return {...state, error: action.error}
    default:
      return state
  }
}
