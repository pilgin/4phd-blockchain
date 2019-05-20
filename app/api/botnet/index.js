import request from './request'

const botnet = {
  fetchBotnet () {
    return request.get('/botnet')
      .then((response) => {
        return response.json().then(json => {
          return response.ok ? Promise.resolve({ data: json }) : Promise.reject(json)
        })
      })
  }
}

export default botnet
