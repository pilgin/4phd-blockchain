import {
  CHANGE_FORM,
  TRANSFER,
  TRANSFER_STATUS,
  TRANSFER_ERROR,
  CLEAR_ERROR
} from './constants'

export function changeForm(newFormState) {
  return {type: CHANGE_FORM, newFormState }
}

export function transfer(amount) {
  return { type: TRANSFER, amount }
}

export function transferStatus(status) {
  return { type: TRANSFER_STATUS, status }
}

export function transferError(error) {
  return { type: TRANSFER_ERROR, error }
}

export function clearError () {
  return { type: CLEAR_ERROR }
}
