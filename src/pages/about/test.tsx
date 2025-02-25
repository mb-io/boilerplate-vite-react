import { render } from '@testing-library/react'
import AboutPage from './about'
import { describe, it, expect } from 'vitest'

describe('AboutPage', () => {
  it('renders correctly', () => {
    const { container } = render(<AboutPage />)
    expect(container).toMatchSnapshot()
  })
})
