import {
  FETCH_DASHBOARD,
  UPDATE_DASHBOARD,
  FETCH_DASHBOARD_ERROR
} from '../actions/stats/constants'

const statsState = {
  data: [],
  teamData: {}
}

export default function dashboard(state = statsState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD:
      return {...state}
    case UPDATE_DASHBOARD:
      return {...state, data: action.data }
    case FETCH_DASHBOARD_ERROR:
      return {...state, error: action.error}
    default:
      return state
  }
}
