import { describe, it, expect } from 'vitest'
import { Http403Exception } from './http-403-exception'
import { AxiosError } from 'axios'

describe('Http403Exception', () => {
  it('should create an exception with default message', () => {
    const exception = new Http403Exception()
    expect(exception.status).toBe(403)
    expect(exception.message).toBe('Not Authorized')
    expect(exception).toMatchSnapshot()
  })

  it('should create an exception with custom message', () => {
    const message = 'Custom not authorized message'
    const exception = new Http403Exception(message)
    expect(exception.status).toBe(403)
    expect(exception.message).toBe(message)
    expect(exception).toMatchSnapshot()
  })

  it('should create an exception with custom message and AxiosError', () => {
    const message = 'Custom not authorized message'
    const axiosError = new AxiosError('Axios error message')
    const exception = new Http403Exception(message, axiosError)
    expect(exception.status).toBe(403)
    expect(exception.message).toBe(message)
    expect(exception.error).toBe(axiosError)
    expect(exception).toMatchSnapshot()
  })
})
