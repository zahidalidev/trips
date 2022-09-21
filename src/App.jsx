import { Route, Routes, Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'

import Home from 'containers/home'

import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <Suspense fallback={<div />}>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  </Suspense>
)

export default App
