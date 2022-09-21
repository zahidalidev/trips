import {
  Accordion, AccordionSummary, AccordionDetails, Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useEffect, useState } from 'react'

import AppBar from 'components/AppBar'
import chartDetails from 'utils/constants'
import fetchTrips from 'api/trips'
import handleBikesAtHours from 'utils/handleBikesAtHours'
import handleRidersByAgeLocation from 'utils/handleRidersByAgeLocation'
import handleAvgCoveredDistance from 'utils/handleAvgCoveredDistance'
import LineChart from 'components/LineChart'

import 'containers/home/styles.scss'

const Home = () => {
  const [charts, setCharts] = useState(chartDetails)

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
