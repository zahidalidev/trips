import { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import {
  handleAvgCoveredDistance,
  handleBikesAtHours,
  handleRidersByAgeLocation,
} from 'utils/helpers'
import fetchTrips from 'api/trips'
import LineChart from 'components/LineChart'

import 'containers/home/styles.scss'
import AppBar from 'components/AppBar'

const Home = () => {
  const [charts, setCharts] = useState([
    {
      expanded: true,
      question: 'How many bikes are rented at every hour of the day?',
      details: {},
      label: 'Bikes rented at hour',
    },
    {
      expanded: false,
      question: 'The age distribution of riders for each starting location',
      details: {},
      label: 'Average age distribution',
    },
    {
      expanded: false,
      question: 'The average distance covered by each bike',
      details: {},
      label: 'Average covered distance',
    },
  ])

  const handleChange = (id) => {
    const tempCharts = [...charts]
    tempCharts.map((item, index) => {
      if (id === index) {
        tempCharts[index].expanded = !item.expanded
      } else {
        tempCharts[index].expanded = false
      }
      return item.expanded === false
    })
    setCharts(tempCharts)
  }

  const handleTrips = async () => {
    try {
      const { data } = await fetchTrips()
      const tempCharts = [...charts]
      tempCharts[0].details = handleBikesAtHours(data)
      tempCharts[1].details = handleRidersByAgeLocation(data)
      tempCharts[2].details = handleAvgCoveredDistance(data)
      setCharts(tempCharts)
    } catch (error) {
      console.log('Fetching trips error! ', error)
    }
  }

  useEffect(() => {
    handleTrips()
  }, [])

  return (
    <div className='chart-container'>
      <AppBar />
      <div className='chart'>
        {charts.map((chart, index) => (
          <Accordion
            key={chart.label}
            expanded={chart.expanded}
            onChange={() => handleChange(index)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{chart.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <LineChart details={chart.details} label={chart.label} />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default Home
