import { Box, CircularProgress } from '@mui/material'

import 'components/LoadingModal/styles.scss'

const LoadingModal = () => (
  <Box className='modal-box'>
    <CircularProgress />
  </Box>
)

export default LoadingModal
