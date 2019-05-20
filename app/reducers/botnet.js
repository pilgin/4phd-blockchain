import {
  FETCH_BOTNET,
  UPDATE_BOTNET,
  FETCH_BOTNET_ERROR
} from '../actions/botnet/constants'

const botnetState = {}

export default function botnet(state = botnetState, action) {
  switch (action.type) {
    case FETCH_BOTNET:
      return { ...state }
    case UPDATE_BOTNET:
      return { ...state, ...action.data }
    case FETCH_BOTNET_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
