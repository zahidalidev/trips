import { getDistance } from 'geolib'

const handleAvgCoveredDistance = (data) => {
  const uniqueBikes = {}
  data.forEach((item) => {
    const distance = getDistance(
      { latitude: item['start station latitude'], longitude: item.start_station_longitude },
      { latitude: item.end_station_latitude, longitude: item.end_station_longitude },
    )

    uniqueBikes[item.bike_id] = {
      distances: [...(uniqueBikes[item.bike_id]?.distances || []), distance],
    }
  })

  const keys = Object.keys(uniqueBikes)
  keys.forEach((key) => {
    uniqueBikes[key].ridersAvgDistance = uniqueBikes[key].distances.reduce((a, b) => a + b, 0)
    uniqueBikes[key].ridersAvgDistance /= uniqueBikes[key].distances.length
    uniqueBikes.allDistances = [
      ...(uniqueBikes?.allDistances || []),
      uniqueBikes[key].ridersAvgDistance,
    ]
  })

  return {
    labels: keys,
    data: uniqueBikes.allDistances,
  }
}

export default handleAvgCoveredDistance
