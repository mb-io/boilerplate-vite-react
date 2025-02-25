import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Logo from './logo'

// Mock the useThemeStore hook
vi.mock('@/stores/theme-store/theme-store', () => ({
  default: () => ({
    theme: 'light' // default theme for testing
  })
}))

describe('Logo Component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Logo />)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with size "sm"', () => {
    const { container } = render(<Logo size="sm" />)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with size "md"', () => {
    const { container } = render(<Logo size="md" />)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with size "lg"', () => {
    const { container } = render(<Logo size="lg" />)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with custom className', () => {
    // eslint-disable-next-line tailwindcss/no-custom-classname
    const { container } = render(<Logo className="custom-class" />)
    expect(container).toMatchSnapshot()
  })
})
