import axios from 'axios'

export function search(lat, lng) {
  return axios
    .get('/api/data', {
      params: {
        lng,
        lat,
      },
    })
    .then((response) => {
      console.log(response)
      return response.data
    })
}
