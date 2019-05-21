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
  register (login, password, wallet) {
    return request.post('/register', { login, password, wallet })
      .then((response) => {
        if (!response.ok) return Promise.reject('Registration failed')

        return response.json()
          .then((json) => {
            return response.ok ? Promise.resolve({ data: json }) : Promise.reject(json.message)
          })
          .then(() => auth.login(login, password))
      })
  },

  loggedIn () {
    return !!localStorage.user
  },

  getUser () {
    return localStorage.user
  }
}

export default auth
