import request from './request'

const transfer = {
  transfer (amount) {
    return request.post('/transfer', amount)
      .then((response) => {
        if (!response.ok) return Promise.reject('Transfer failed')

        return Promise.resolve({ status: 'ok' })
      })
  }
}

export default transfer
