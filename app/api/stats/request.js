const request = {
  get (endpoint) {
    switch (endpoint) {
      case '/stats':
        return fetch('/api/stats', {
          credentials: 'same-origin'
        })
      default:
        break
    }
  },
  getTeamStats (endpoint, id) {
    switch (endpoint) {
      case '/stats':
        return fetch(`/api/stats/${id}`, {
          credentials: 'same-origin'
        })
      default:
        break
    }
  }
}

export default request
