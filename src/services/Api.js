import axios from 'axios'

const params = {
  outFields: 'OBJECTID,cases7_per_100k,GEN,last_update,BL',
  geometryType: 'esriGeometryPoint',
  spatialRel: 'esriSpatialRelWithin',
  inSR: '4326',
  outSR: '4326',
  f: 'json',
}

//  TODO: Rename fields in here.

export function search(lat, lng) {
  return axios
    .get(process.env.NEXT_PUBLIC_RKI_API, {
      params: {
        ...params,
        geometry: lng + ',' + lat,
      },
    })
    .then((response) => {
      const features = response.data.features
      if (!features.length) {
        throw new Error('No area data found')
      }

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
    })
}
