import {
  FETCH_BOTNET,
  FETCH_BOTNET_ERROR
} from './constants'

export function fetchBotnet() {
  return { type: FETCH_BOTNET }
}

export function fetchBotnetError() {
  return { type: FETCH_BOTNET_ERROR }
}
