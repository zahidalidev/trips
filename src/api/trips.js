import instance from 'api'

const fetchTrips = () => instance.get('trips.json')

export default fetchTrips
