import { render, screen } from '@testing-library/react'

import HomePage from './home'
import { siteConfig } from '@/configs/site'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

describe('<HomePage />', () => {
  it('should render the HomePage', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    )

    expect(
      screen.getByRole('heading', {
        name: /Welcome!/i,
        level: 1
      })
    ).toBeInTheDocument()

    expect(screen.getByText(siteConfig.description)).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /Open in VS Code/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(container.firstChild).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
