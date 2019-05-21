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
        if (!response.ok) return response.json().then((error) => Promise.reject(error))

        localStorage.user = login

        return Promise.resolve(true)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

  logout () {
    return request.post('/logout')
      .then((response) => {
        if (!response.ok) return response.json().then((error) => Promise.reject(error))

        delete localStorage.user

        return Promise.resolve(true)
      })
      .catch((error) => {
        return Promise.reject(error)
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
        if (!response.ok) return response.json().then((error) => Promise.reject(error))

        return response.json()
      })
      .then((data) => {
        return Promise.resolve({ data })
      })
      .then(() => auth.login(login, password))
      .catch((error) => Promise.reject(error))
  },

  loggedIn () {
    return !!localStorage.user
  },

  getUser () {
    return localStorage.user
  }
}

export default auth
