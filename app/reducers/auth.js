import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR
} from '../actions/auth/constants'

import authApi from '../api/auth'

const authState = {
  formState: {
    login: '',
    password: ''
  },
  error: '',
  currentlySending: false,
  loggedIn: authApi.loggedIn()
}

export default function auth(state = authState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {...state, formState: action.newFormState}
    case SET_AUTH:
      return {...state, loggedIn: action.newAuthState}
    case SENDING_REQUEST:
      return {...state, currentlySending: action.sending}
    case REQUEST_ERROR:
      return {...state, error: action.error}
    case CLEAR_ERROR:
      return {...state, error: ''}
    default:
      return state
  }
}
