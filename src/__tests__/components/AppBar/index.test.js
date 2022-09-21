import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import AppBar from 'components/AppBar'
import { TestApp } from 'utils/test'

describe('AppBar Component', () => {
  beforeEach(() =>
    act(() => render(<AppBar />, { wrapper: TestApp })),
  )

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have heading', async () => {
    await waitFor(() => {
      const heading = screen.getByText('Trips')
      expect(heading).toBeInTheDocument()
    })
  })
})
