import request from './request'

const transfer = {
  transfer (amount) {
    return request.post('/transfer', amount)
      .then((response) => {
        if (!response.ok) return response.json().then((error) => Promise.reject(error))

        return Promise.resolve({ status: 'ok' })
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  }
}

export default transfer
