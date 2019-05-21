import request from './request'

const rate = {
  fetchRate () {
    return request.get('/rate')
      .then((response) => {
        return response.json().then(json => {
          return response.ok ? Promise.resolve({ data: json }) : Promise.reject(json)
        })
      })
  },
  fetchRateHistory ({ from, to } = {}) {
    return request.post('/ratehistory', { from, to })
      .then((response) => {
        return response.json().then(json => {
          return response.ok ?
            Promise.resolve({ data: Object.entries(json).map((arr, ind) => ind % 10 === 0 ? arr : undefined).filter((item) => item) }) :
            Promise.reject(json)
        })
      })
  }
}

export default rate
