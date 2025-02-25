import { useJsonPlaceholder } from './use-json-placeholder'
import { jsonPlaceholderService } from '@/services/json-placeholder-service/json-placeholder-service'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import { Mock, vi } from 'vitest'

vi.mock('@/services/json-placeholder-service/json-placeholder-service')

const queryClient = new QueryClient()

describe('useJsonPlaceholder', () => {
  it('should fetch data from jsonPlaceholderService', async () => {
    const mockData = [{ id: 1, title: 'Test Post' }]
    const mockFetch = vi.fn().mockResolvedValue(mockData)
    ;(jsonPlaceholderService as unknown as Mock).mockImplementation(() => ({ fetch: mockFetch }))

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useJsonPlaceholder(), { wrapper })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toMatchSnapshot()
  })
})
