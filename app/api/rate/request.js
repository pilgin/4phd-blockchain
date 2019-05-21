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
  },

  post (endpoint, interval) {
    switch (endpoint) {
      case '/ratehistory':
        return fetch('/api/ratehistory', {
          body: JSON.stringify(interval),
          method: 'POST',
          credentials: 'same-origin'
        })
      default:
        break
    }
  }
}

export default request
