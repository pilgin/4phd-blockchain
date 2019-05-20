import request from './request'

const user = {
  fetchUser () {
    return request.get('/user')
      .then((response) => {
        return response.json().then(json => {
          return response.ok ? Promise.resolve({ data: json }) : Promise.reject(json)
        })
      })
  }
}

export default user
