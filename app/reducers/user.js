import {
  FETCH_USER,
  UPDATE_USER,
  FETCH_USER_ERROR
} from '../actions/user/constants'

const userState = {
  login: '',
  wallet: null,
  command_id: null,
  balance: 0,
  total_blocks: 0
}

export default function user(state = userState, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state }
    case UPDATE_USER:
      return { ...state, ...action.data }
    case FETCH_USER_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
