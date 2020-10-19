import axios from 'axios'

export const getCoordinatesByAddress = (address) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${address}&format=json&countrycodes=DE`

  return axios.get(url).then((response) => {
    return {
      lng: response.data[0].lon,
      lat: response.data[0].lat,
    }
  })
}
