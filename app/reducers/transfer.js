import {
  CHANGE_FORM,
  TRANSFER_STATUS,
  TRANSFER_ERROR
} from '../actions/transfer/constants'

import transferApi from '../api/transfer'

const transferState = {
  formState: {
    amount: 0
  },
  status: '',
  error: ''
}

export default function transfer(state = transferState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {...state, formState: action.newFormState}
    case TRANSFER_STATUS:
      return {...state, status: action.status}
    case TRANSFER_ERROR:
      return {...state, error: action.error}
    default:
      return state
  }
}
