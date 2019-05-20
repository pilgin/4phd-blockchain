const request = {
  get (endpoint) {
    switch (endpoint) {
      case '/rate':
        return fetch('/api/rate', {
          credentials: 'same-origin'
        })
      default:
        break
    }
  }
}

export default request
