const request = {
  get (endpoint) {
    switch (endpoint) {
      case '/botnet':
        return fetch(`/api/botnet`, {
          credentials: 'same-origin'
        })
      default:
        break
    }
  }
}

export default request
