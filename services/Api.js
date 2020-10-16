import axios from 'axios'

const params = {
  outFields: 'OBJECTID,cases7_per_100k,GEN',
  geometryType: 'esriGeometryPoint',
  spatialRel: 'esriSpatialRelWithin',
  inSR: '4326',
  outSR: '4326',
  f: 'json',
}

export function search(lng, lat) {
  return axios
    .get(process.env.NEXT_PUBLIC_RKI_API, {
      params: {
        ...params,
        geometry: lng + ',' + lat,
      },
    })
    .then((response) => response.data)
}
