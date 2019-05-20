const request = {
  get (endpoint, amount) {
    switch (endpoint) {
      case '/user':
        return fetch(`/api/user`, {
          credentials: 'same-origin'
        })
      default:
        break
    }
  }
}

export default request
