import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material'

export default () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <Typography variant='h6' color='inherit' component='div'>
          Trips
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
)
