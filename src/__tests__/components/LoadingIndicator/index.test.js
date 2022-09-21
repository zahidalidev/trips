import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import LoadingIndicator from 'components/LoadingIndicator'
import { TestApp } from 'utils/test'

describe('LoadingIndicator Component', () => {
  beforeEach(() =>
    act(() => render(<LoadingIndicator />, { wrapper: TestApp })),
  )

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have LoadingIndicator', async () => {
    await waitFor(() => {
      const heading = screen.getByTestId('loading-indicator')
      expect(heading).toBeInTheDocument()
    })
  })
})
