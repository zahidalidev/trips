import { Box, CircularProgress } from '@mui/material'

import 'components/LoadingIndicator/styles.scss'

const LoadingIndicator = () => (
  <Box data-testid='loading-indicator' className='modal-box'>
    <CircularProgress />
  </Box>
)

export default LoadingIndicator
