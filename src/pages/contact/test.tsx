import { render } from '@testing-library/react'
import ContactPage from './contact'
import { describe, it, expect } from 'vitest'

describe('ContactPage', () => {
  it('renders correctly', () => {
    const { container } = render(<ContactPage />)
    expect(container).toMatchSnapshot()
  })
})
