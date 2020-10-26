import axios from 'axios'

const params = {
  outFields: 'OBJECTID,cases7_per_100k,GEN,last_update,BL',
  returnGeometry: false,
  f: 'json',
}

const formatResponse = (response) => {
  const features = response.data.features
  const {
    GEN: area,
    cases7_per_100k: cases7Per100k,
    last_update: lastUpdated,
    BL: state,
  } = features[0]?.attributes || {}

  return {
    area,
    cases7Per100k,
    lastUpdated,
    state,
  }
}

export function searchByCoordinates(lat, lng) {
  return axios
    .get(process.env.NEXT_PUBLIC_RKI_API, {
      params: {
        ...params,
        geometryType: 'esriGeometryPoint',
        spatialRel: 'esriSpatialRelWithin',
        inSR: '4326',
        outSR: '4326',
        geometry: lng + ',' + lat,
      },
    })
    .then((response) => {
      if (!response.data.features.length) {
        throw new Error('No area data found')
      }

      return formatResponse(response)
    })
}

export function fetchAreas() {
  return axios
    .get(process.env.NEXT_PUBLIC_RKI_API, {
      params: {
        ...params,
        outFields: 'GEN',
        where: '1=1',
      },
    })
    .then((response) => {
      if (!response.data.features.length) {
        throw new Error('No area data found')
      }

      const areas = response.data.features.map(
        (feature) => feature.attributes.GEN
      )
      return areas
    })
}

export function searchByArea(area) {
  return axios
    .get(
      `${process.env.NEXT_PUBLIC_RKI_API}?where=GEN = '${encodeURIComponent(
        area
      )}'`,
      {
        params: {
          ...params,
        },
      }
    )
    .then((response) => {
      if (!response.data.features.length) {
        throw new Error('No area data found')
      }

      return formatResponse(response)
    })
}
