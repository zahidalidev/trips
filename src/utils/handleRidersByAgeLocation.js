import { calculateAge } from 'utils/helpers'

const handleRidersByAgeLocation = (data) => {
  const uniqueStationRiders = {}
  data.forEach((item) => {
    if (item['birth year'] !== null) {
      const birthYear = parseInt(item['birth year'], 10)
      uniqueStationRiders[item.start_station_id] = {
        riders: [...(uniqueStationRiders[item.start_station_id]?.riders || []), birthYear],
      }
    }
  })

  const keys = Object.keys(uniqueStationRiders)
  keys.forEach((key) => {
    uniqueStationRiders[key].ridersAvgBirth = uniqueStationRiders[key].riders.reduce(
      (a, b) => a + b,
      0,
    )
    uniqueStationRiders[key].ridersAvgBirth /= uniqueStationRiders[key].riders.length
    uniqueStationRiders.ridersAvgAge = [
      ...(uniqueStationRiders.ridersAvgAge || []),
      calculateAge(uniqueStationRiders[key].ridersAvgBirth),
    ]
  })

  return {
    labels: keys,
    data: uniqueStationRiders.ridersAvgAge,
  }
}

export default handleRidersByAgeLocation
