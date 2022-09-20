import { Route, Routes, Navigate } from 'react-router-dom'
import { Suspense } from 'react'

import Home from 'containers/home'

const App = () => (
  <Suspense fallback={<div />}>
    <Routes>
      <Route path='/home' element={<Home />} />

      <Route path='*' element={<Navigate replace to='/home' />} />
    </Routes>
  </Suspense>
)

export default App
