import { browserHistory } from 'react-router'
import { take, call, put, race } from 'redux-saga/effects'

import authApi from '../api/auth'

import {
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  SET_AUTH,
  LOGOUT,
  CHANGE_FORM,
  REQUEST_ERROR
} from '../actions/auth/constants'

/**
 * Effect to handle authorization
 * @param  {string} login               The login of the user
 * @param  {string} password               The password of the user
 * @param  {object} options                Options
 */
export function* authorize({ login, password, registering }) {
  yield put({ type: SENDING_REQUEST, sending: true })

  try {
    let response

    // For either log in or registering, we call the proper function in the `auth`
    // module, which is asynchronous. Because we're using generators, we can work
    // as if it's synchronous because we pause execution until the call is done
    // with `yield`!

    if (registering) {
      response = yield call(authApi.register, login, password)
    } else {
      response = yield call(authApi.login, login, password)
    }

    return response
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message })

    return false
  } finally {
    yield put({ type: SENDING_REQUEST, sending: false })
  }
}

/**
 * Effect to handle logging out
 */
export function* logout() {
  yield put({ type: SENDING_REQUEST, sending: true })

  // Similar to above, we try to log out by calling the `logout` function in the
  // `auth` module. If we get an error, we send an appropiate action. If we don't,
  // we return the response.
  try {
    const response = yield call(authApi.logout)
    yield put({ type: SENDING_REQUEST, sending: false })

    return response
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message })
  }
}

/**
 * Log in saga
 */
export function* loginFlow() {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    const request = yield take(LOGIN_REQUEST)
    const { login, password } = request.data

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    const winner = yield race({
      auth: call(authorize, { login, password, registering: false }),
      logout: take(LOGOUT)
    })

    // If `authorize` was the winner...
    if (winner.auth) {
      // ...we send Redux appropiate actions
      yield put({ type: SET_AUTH, newAuthState: true }) // User is logged in (authorized)
      yield put({ type: CHANGE_FORM, newFormState: { login: '', password: '' } }) // Clear form

      forwardTo('/home') // Go to stats page
    }
  }
}

/**
 * Log out saga
 * This is basically the same as the `if (winner.logout)` of above, just written
 * as a saga that is always listening to `LOGOUT` actions
 */
export function* logoutFlow() {
  while (true) {
    yield take(LOGOUT)
    yield put({ type: SET_AUTH, newAuthState: false })

    yield call(logout)
    forwardTo('/')
  }
}

export function* registerFlow() {
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    const request = yield take(REGISTER_REQUEST)
    const { login, password } = request.data

    // We call the `authorize` task with the data, telling it that we are registering a user
    // This returns `true` if the registering was successful, `false` if not
    const wasSuccessful = yield call(authorize, { login, password, registering: true })

    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      yield put({ type: SET_AUTH, newAuthState: true }) // User is logged in (authorized) after being registered
      yield put({ type: CHANGE_FORM, newFormState: { login: '', password: '' } }) // Clear form
      forwardTo('/home') // Go to dashboard page
    }
  }
}

// Little helper function to abstract going to different pages
function forwardTo (location) {
  browserHistory.push(location)
}
