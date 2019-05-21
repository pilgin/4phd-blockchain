const request = {
  post (endpoint, data) {
    switch (endpoint) {
      case '/login':
        return fetch('/api/login', {
          body: JSON.stringify(data),
          method: 'POST',
          credentials: 'same-origin'
        })
      case '/logout':
        return fetch('/api/logout', {
          credentials: 'same-origin'
        })
      case '/register':
        return fetch('/api/registration', {
          body: JSON.stringify(data),
          method: 'POST',
          credentials: 'same-origin'
        })
      default:
        break
    }
  }
}

export default request
