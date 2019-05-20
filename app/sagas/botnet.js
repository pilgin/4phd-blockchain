import { take, call, put } from 'redux-saga/effects'

import botnetApi from '../api/botnet'

import {
  FETCH_BOTNET,
  UPDATE_BOTNET,
  FETCH_BOTNET_ERROR
} from "../actions/botnet/constants";

export function* fetchBotnet(amount) {
  try {
    const response = yield call(botnetApi.fetchBotnet)

    yield put({ type: UPDATE_BOTNET, data: response.data })
  } catch (error) {
    yield put({ type: FETCH_BOTNET_ERROR, error: error.message })
  }
}

export function* fetchBotnetFlow() {
  while (true) {
    yield take(FETCH_BOTNET)
    yield call(fetchBotnet)
  }
}
