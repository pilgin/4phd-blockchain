const request = {
  post (endpoint, amount) {
    switch (endpoint) {
      case '/transfer':
        return fetch(`/api/transfer/${amount}`, {
          credentials: 'same-origin'
        })
      default:
        break
    }
  }
}

export default request
