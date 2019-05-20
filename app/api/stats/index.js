import request from './request'

import  authApi from '../auth'

const stats = {
  fetchStats () {
    return request.get('/stats')
      .then((response) => {
        return response.json().then(json => {
          return response.ok ? Promise.resolve({ data: json }) : Promise.reject(json)
        })
      })
  },
  fetchTeamStats() {
    return request.getTeamStats('/stats', authApi.getUser())
      .then((response) => {
        return response.json().then(json => {
          return response.ok ? Promise.resolve({ data: json }) : Promise.reject(json)
        })
      })
  }
}

export default stats
