import axios from 'axios'

export const getCoordinatesByAddress = (address) => {
  const url = `https://geocode.xyz/${address}?json=1&region=DE`

  return axios.get(url).then((response) => {
    return {
      lng: response.data.longt,
      lat: response.data.latt,
    }
  })
}
