import { describe, it, expect } from 'vitest'
import { HttpNoResponseException } from './http-no-response-exception'
import { AxiosError } from 'axios'

describe('HttpNoResponseException', () => {
  it('should create an exception with default message', () => {
    const exception = new HttpNoResponseException()
    expect(exception.name).toBe('NoResponseException')
    expect(exception.message).toBe('Server failed to respond')
    expect(exception).toMatchSnapshot()
  })

  it('should create an exception with custom message', () => {
    const message = 'Custom no response message'
    const exception = new HttpNoResponseException(message)
    expect(exception.name).toBe('NoResponseException')
    expect(exception.message).toBe(message)
    expect(exception).toMatchSnapshot()
  })

  it('should create an exception with custom message and AxiosError', () => {
    const message = 'Custom no response message'
    const axiosError = new AxiosError('Axios error message')
    const exception = new HttpNoResponseException(message, axiosError)
    expect(exception.name).toBe('NoResponseException')
    expect(exception.message).toBe(message)
    expect(exception.error).toBe(axiosError)
    expect(exception).toMatchSnapshot()
  })
})
