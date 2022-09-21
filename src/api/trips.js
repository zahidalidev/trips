import instance from 'api'

const fetchTrips = () => instance
  .get('trips.json')
  .then((response) => response.data)
  .catch(() => null)

export default fetchTrips
