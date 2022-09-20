import { useEffect, useState } from 'react'

import { handleBikesAtHours, handleRidersByAgeLocation } from 'utils/helpers'
import fetchTrips from 'api/trips'
import LineChart from 'components/LineChart'

import 'containers/home/styles.scss'

const Home = () => {
  const [houlyBikes, setHourlyBikes] = useState({})
  const [ridersByAgeLocation, setRidersByAgeLocation] = useState({})

  const handleTrips = async () => {
    try {
      const { data } = await fetchTrips()
      setHourlyBikes(handleBikesAtHours(data))
      setRidersByAgeLocation(handleRidersByAgeLocation(data))
    } catch (error) {
      console.log('Fetching trips error! ', error)
    }
  }

  useEffect(() => {
    handleTrips()
  }, [])

  return (
    <div className='chart-container'>
      <div className='chart'>
        <LineChart details={houlyBikes} label='Bikes rented at hour of the day' />
      </div>
      <div className='chart'>
        <LineChart details={ridersByAgeLocation} label='Average age distribution of riders at each station' />
      </div>
    </div>
  )
}

export default Home
