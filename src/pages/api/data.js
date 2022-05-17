import axios from 'axios'

const getIncidenceData = (lng, lat) => {
  const baseUrl =
    'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query'

  const params = {
    outFields: 'OBJECTID,cases7_per_100k,GEN,last_update,BL',
    geometryType: 'esriGeometryPoint',
    spatialRel: 'esriSpatialRelWithin',
    inSR: '4326',
    outSR: '4326',
    f: 'json',
  }

  return axios
    .get(baseUrl, {
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

export default function handler(req, res) {
  const { lng, lat } = req.query

  const rkiDataPromise = getIncidenceData(lng, lat)

  return rkiDataPromise.then((values) => res.status(200).json(values))
}
