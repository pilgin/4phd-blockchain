import {take, call, put} from 'redux-saga/effects'

import transferApi from '../api/transfer'

import {
  TRANSFER,
  TRANSFER_STATUS,
  TRANSFER_ERROR
} from "../actions/transfer/constants"

export function* transfer(amount) {
  try {
    const response = yield call(transferApi.transfer, amount)

    yield put({ type: TRANSFER_STATUS, data: response.status })
  } catch (error) {
    yield put({ type: TRANSFER_ERROR, error: error.message })
  }
}

export function* transferFlow() {
  while (true) {
    const { amount } = yield take(TRANSFER)
    yield call(transfer, amount)
  }
}
