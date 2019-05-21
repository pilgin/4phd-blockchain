import {
  FETCH_USER,
  FETCH_USER_ERROR,
  CLEAR_USER_ERROR
} from './constants'

export function fetchUser() {
  return { type: FETCH_USER }
}

export function fetchUserError() {
  return { type: FETCH_USER_ERROR }
}

export function clearUserError() {
  return { type: CLEAR_USER_ERROR }
}
