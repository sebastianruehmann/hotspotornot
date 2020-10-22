import axios from 'axios'

export const getCoordinatesByAddress = (address) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${address}&format=json&countrycodes=DE`

  return axios.get(url).then((response) => {
    if (!response.data.length) {
      throw new Error('No location data found')
    }
    return {
      lng: response.data[0].lon,
      lat: response.data[0].lat,
    }
  })
}
