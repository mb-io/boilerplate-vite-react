import { render } from '@testing-library/react'
import DefaultLayout from './default'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'

describe('DefaultLayout', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <DefaultLayout>
          <div>Test Content</div>
        </DefaultLayout>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
