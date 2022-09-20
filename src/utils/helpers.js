export const getCurrentDate = (today) => {
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()
  const hh = today.getHours()
  const min = today.getMinutes()
  const sec = today.getSeconds()
  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${sec}`
}

export const handleBikesAtHours = (data) => {
  const bikesEveryHours = [
    ...Array(672).fill({
      start_time: '',
      end_time: '',
      count: 0,
    }),
  ]
  const dateRange = [...Array(672).keys()]
  let currentTime = new Date('2015-02-01 00:00:00')
  let currentTimeNextHour = currentTime
  dateRange.forEach((index) => {
    currentTimeNextHour = new Date(currentTimeNextHour.setHours(currentTime.getHours() + 1))
    data.forEach((trip) => {
      if (
        new Date(trip.start_time) >= currentTime
        && new Date(trip.start_time) <= currentTimeNextHour
      ) {
        bikesEveryHours[index] = {
          start_time: getCurrentDate(currentTime),
          end_time: getCurrentDate(currentTimeNextHour),
          count: bikesEveryHours[index].count + 1,
        }
      } else {
        bikesEveryHours[index] = {
          start_time: getCurrentDate(currentTime),
          end_time: getCurrentDate(currentTimeNextHour),
          count: bikesEveryHours[index].count,
        }
      }
    })
    currentTime = new Date(currentTime.setHours(currentTime.getHours() + 1))
  })

  return {
    labels: bikesEveryHours.map((item) => item.start_time),
    data: bikesEveryHours.map((item) => item.count),
  }
}

const calculateAge = (birthYear) => {
  const currentYear = new Date().getFullYear()
  return currentYear - birthYear
}

export const handleRidersByAgeLocation = (data) => {
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