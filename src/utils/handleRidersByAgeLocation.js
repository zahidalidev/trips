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
    const birthSum = uniqueStationRiders[key].riders.reduce((prev, next) => prev + next, 0)
    uniqueStationRiders[key].ridersAvgBirth = birthSum / uniqueStationRiders[key].riders.length
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
