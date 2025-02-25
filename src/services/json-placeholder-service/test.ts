import { describe, it, expect, vi, beforeEach, afterEach, Mock } from 'vitest'
import axios from 'axios'
import { jsonPlaceholderService } from './json-placeholder-service'
import { axiosServiceErrorHandler } from '../axios-service-error-handler/axios-service-error-handler'

vi.mock('axios')
vi.mock('../axios-service-error-handler/axios-service-error-handler')

describe('jsonPlaceholderService', () => {
  let service: ReturnType<typeof jsonPlaceholderService>

  beforeEach(() => {
    service = jsonPlaceholderService()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
    vi.resetAllMocks()
  })

  it('should fetch data successfully', async () => {
    const mockResponse = { data: { userId: 1, id: 1, title: 'Test Title', completed: false } }
    ;(axios.get as Mock).mockResolvedValue(mockResponse)

    const result = await service.fetch()

    expect(result).toEqual(mockResponse.data)
    expect(axios.get).toHaveBeenCalledWith('/todos/1', undefined)
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

  it('should handle errors using axiosServiceErrorHandler', async () => {
    const mockError = new Error('Network Error')
    ;(axios.get as Mock).mockRejectedValue(mockError)
    ;(axiosServiceErrorHandler as unknown as Mock).mockImplementation((error: Error, message: string) => {
      throw new Error(message)
    })

    await expect(service.fetch()).rejects.toThrow('Failed to fetch placeholder data')
    expect(axiosServiceErrorHandler).toHaveBeenCalledWith(mockError, 'Failed to fetch placeholder data')
  })

  it('should throttle requests after 2 attempts', async () => {
    const mockResponse = { data: { userId: 1, id: 1, title: 'Test Title', completed: false } }
    ;(axios.get as Mock).mockResolvedValue(mockResponse)

    try {
      await service.fetch()
      await service.fetch()
    } catch (error) {
      expect(error).toEqual(new Error('Too many requests. Please wait a minute before trying again.'))
    }

    try {
      await expect(service.fetch()).rejects.toThrow('Too many requests. Please wait a minute before trying again.')
    } catch (error) {
      expect(error).toEqual(new Error('Too many requests. Please wait a minute before trying again.'))
    }

    // Ensure the throttle is reset after 1 minute
    vi.runAllTimers() // Fast-forward time by 1 minute

    try {
      await service.fetch()
    } catch (error) {
      expect(error).toEqual(new Error('Failed to fetch placeholder data'))
    }
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

  it('should reset throttle after 1 minute', async () => {
    const mockResponse = { data: { userId: 1, id: 1, title: 'Test Title', completed: false } }
    ;(axios.get as Mock).mockResolvedValue(mockResponse)

    try {
      await service.fetch()
      await service.fetch()
    } catch (error) {
      expect(error).toEqual(new Error('Too many requests. Please wait a minute before trying again.'))
    }

    try {
      await expect(service.fetch()).rejects.toThrow('Too many requests. Please wait a minute before trying again.')
    } catch (error) {
      expect(error).toEqual(new Error('Too many requests. Please wait a minute before trying again.'))
    }

    vi.runAllTimers() // Fast-forward time by 1 minute

    const result = await service.fetch()
    expect(result).toEqual(mockResponse.data)
    expect(axios.get).toHaveBeenCalledTimes(2)
  })

  it('should match the snapshot of fetched data', async () => {
    const mockResponse = { data: { userId: 1, id: 1, title: 'Test Title', completed: false } }
    ;(axios.get as Mock).mockResolvedValue(mockResponse)

    const result = await service.fetch()

    expect(result).toMatchSnapshot()
  })
})
