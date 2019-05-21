import {
  FETCH_RATE,
  UPDATE_RATE,
  FETCH_RATE_ERROR,
  FETCH_RATE_HISTORY,
  UPDATE_RATE_HISTORY,
  FETCH_RATE_HISTORY_ERROR
} from '../actions/rate/constants'

const rateState = {
  data: {}
}

export default function auth(state = rateState, action) {
  switch (action.type) {
    case FETCH_RATE:
      return {...state}
    case UPDATE_RATE:
      return {...state, data: action.data }
    case FETCH_RATE_ERROR:
      return {...state, error: action.error }
    case FETCH_RATE_HISTORY:
      return {...state }
    case UPDATE_RATE_HISTORY:
      return {...state, rateHistory: action.data }
    case FETCH_RATE_HISTORY_ERROR:
      return {...state, error: action.error }
    default:
      return state
  }
}
