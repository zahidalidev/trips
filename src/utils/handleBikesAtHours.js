import { getCurrentDate } from 'utils/helpers'
import { monthHours } from 'utils/constants'

const handleBikesAtHours = (data) => {
  const dateRange = [...Array(monthHours).keys()]
  let currentTime = new Date('2015-02-01 00:00:00')
  let currentTimeNextHour = currentTime

  const bikesEveryHours = [
    ...Array(monthHours).fill({
      start_time: '',
      count: 0,
    }),
  ]

  dateRange.forEach(index => {
    currentTimeNextHour = new Date(currentTimeNextHour.setHours(currentTime.getHours() + 1))
    data.forEach(trip => {
      if (
        new Date(trip.start_time) >= currentTime
        && new Date(trip.start_time) <= currentTimeNextHour
      ) {
        bikesEveryHours[index] = {
          start_time: getCurrentDate(currentTime),
          count: bikesEveryHours[index].count + 1,
        }
      } else {
        bikesEveryHours[index] = {
          start_time: getCurrentDate(currentTime),
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

export default handleBikesAtHours
