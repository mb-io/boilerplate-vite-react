import { render } from '@testing-library/react'
import NotFoundPage from './not-found'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
