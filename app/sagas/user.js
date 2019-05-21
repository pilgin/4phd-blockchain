import { take, call, put } from 'redux-saga/effects'

import userApi from '../api/user'

import {
  FETCH_USER,
  UPDATE_USER,
  FETCH_USER_ERROR,
  CLEAR_USER_ERROR
} from "../actions/user/constants"

export function* fetchUser(amount) {
  try {
    yield put({ type: CLEAR_USER_ERROR })

    const response = yield call(userApi.fetchUser)

    yield put({ type: UPDATE_USER, data: response.data })
  } catch (error) {
    yield put({ type: FETCH_USER_ERROR, error: error.message })
  }
}

export function* fetchUserFlow() {
  while (true) {
    yield take(FETCH_USER)
    yield call(fetchUser)
  }
}
