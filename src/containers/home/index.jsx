import {
  Accordion, AccordionSummary, AccordionDetails, Box, Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import { AppBar, LineChart } from 'components'
import LoadingIndicator from 'components/LoadingIndicator'
import { chartDetails } from 'utils/constants'
import fetchTrips from 'api/trips'
import handleBikesAtHours from 'utils/handleBikesAtHours'
import handleRidersByAgeLocation from 'utils/handleRidersByAgeLocation'
import handleAvgCoveredDistance from 'utils/handleAvgCoveredDistance'

import 'containers/home/styles.scss'

const Home = () => {
  const [charts, setCharts] = useState(chartDetails)
  const [loading, setLoading] = useState(false)

  const handleChange = (id) => {
    const tempCharts = [...charts]
    tempCharts.forEach((item, index) => {
      tempCharts[index].expanded = id === index ? !item.expanded : false
    })
    setCharts(tempCharts)
  }

  const handleTrips = async () => {
    setLoading(true)
    const data = await fetchTrips()
    if (data) {
      const tempCharts = [...charts]
      tempCharts[0].details = handleBikesAtHours(data)
      tempCharts[1].details = handleRidersByAgeLocation(data)
      tempCharts[2].details = handleAvgCoveredDistance(data)
      setCharts(tempCharts)
    } else {
      toast.error('Fetching trips error!')
    }
    setLoading(false)
  }

  useEffect(() => {
    handleTrips()
  }, [])

  return (
    <Box className='chart-container'>
      <AppBar />
      <Box className='chart'>
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
              {!loading ? (
                <LineChart details={chart.details} label={chart.label} options={chart.options} />
              ) : (
                <LoadingIndicator show />
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}

export default Home
