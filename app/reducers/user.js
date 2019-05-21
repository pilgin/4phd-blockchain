import {
  FETCH_USER,
  UPDATE_USER,
  FETCH_USER_ERROR,
  CLEAR_USER_ERROR
} from '../actions/user/constants'

const userState = {}

export default function user(state = userState, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state }
    case UPDATE_USER:
      return { ...state, ...action.data }
    case FETCH_USER_ERROR:
      return { ...state, error: action.error }
    case CLEAR_USER_ERROR:
      return { ...state, error: undefined }
    default:
      return state
  }
}
