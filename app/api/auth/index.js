import request from './request'

const { localStorage } = window

const auth = {
  /**
  * Logs a user in, returning a promise with `true` when done
  * @param  {string} login The login of the user
  * @param  {string} password The password of the user
  */
  login (login, password) {
    if (auth.loggedIn()) return Promise.resolve(true)

    return request.post('/login', {login, password})
      .then((response) => {
        if (!response.ok) return Promise.reject('Login failed')

        localStorage.user = login

        return Promise.resolve(true)
      })
  },

  logout () {
    return request.post('/logout')
      .then((response) => {
        if (!response.ok) return Promise.reject('Logout failed')

        delete localStorage.user

        return Promise.resolve(true)
      })
  },

  /**
  * Registers a user and then logs them in
  * @param  {string} login The login of the user
  * @param  {string} password The password of the user
  */
  register (login, password) {
    return request.post('/register', { login, password })
      .then(() => auth.login(login, password))
  },

  loggedIn () {
    return !!localStorage.user
  },

  getUser () {
    return localStorage.user
  }
}

export default auth
