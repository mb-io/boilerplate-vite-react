import { describe, it, expect } from 'vitest'
import { Http404Exception } from './http-404-exception'
import { AxiosError } from 'axios'

describe('Http404Exception', () => {
  it('should create an exception with default message', () => {
    const exception = new Http404Exception()
    expect(exception.status).toBe(404)
    expect(exception.message).toBe('Not Found')
    expect(exception).toMatchSnapshot()
  })

  it('should create an exception with custom message', () => {
    const message = 'Custom not found message'
    const exception = new Http404Exception(message)
    expect(exception.status).toBe(404)
    expect(exception.message).toBe(message)
    expect(exception).toMatchSnapshot()
  })

  it('should create an exception with custom message and AxiosError', () => {
    const message = 'Custom not found message'
    const axiosError = new AxiosError('Axios error message')
    const exception = new Http404Exception(message, axiosError)
    expect(exception.status).toBe(404)
    expect(exception.message).toBe(message)
    expect(exception.error).toBe(axiosError)
    expect(exception).toMatchSnapshot()
  })
})
