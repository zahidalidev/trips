import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

export const TestApp = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

export const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: TestApp }),
  }
}
