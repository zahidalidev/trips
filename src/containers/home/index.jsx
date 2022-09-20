import { useEffect } from 'react'

import fetchTrips from 'api/trips'

const Home = () => {
  const handleTrips = async () => {
    try {
      const data = await fetchTrips()
      console.log('trips: ', data)
    } catch (error) {
      console.log('Fetching trips error! ', error)
    }
  }

  useEffect(() => {
    handleTrips()
  }, [])

  return <div>home</div>
}

export default Home
