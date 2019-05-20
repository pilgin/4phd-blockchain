import {
  FETCH_RATE,
  UPDATE_RATE,
  FETCH_RATE_ERROR
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
      return {...state, error: action.error}
    default:
      return state
  }
}
