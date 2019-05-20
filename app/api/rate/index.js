import request from './request'

const rate = {
  fetchRate () {
    return request.get('/rate')
      .then((response) => {
        return response.json().then(json => {
          return response.ok ? Promise.resolve({ data: json }) : Promise.reject(json)
        })
      })
  }
}

export default rate
