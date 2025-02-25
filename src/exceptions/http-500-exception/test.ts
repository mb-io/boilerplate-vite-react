import { describe, it, expect } from 'vitest'
import { Http500Exception } from './http-500-exception'
import { AxiosError } from 'axios'

describe('Http500Exception', () => {
  it('should create an exception with default message', () => {
    const exception = new Http500Exception()
    expect(exception.status).toBe(500)
    expect(exception.message).toBe('Internal Server Error')
    expect(exception).toMatchSnapshot()
  })

  it('should create an exception with custom message', () => {
    const message = 'Custom internal server error message'
    const exception = new Http500Exception(message)
    expect(exception.status).toBe(500)
    expect(exception.message).toBe(message)
    expect(exception).toMatchSnapshot()
  })

  it('should create an exception with custom message and AxiosError', () => {
    const message = 'Custom internal server error message'
    const axiosError = new AxiosError('Axios error message')
    const exception = new Http500Exception(message, axiosError)
    expect(exception.status).toBe(500)
    expect(exception.message).toBe(message)
    expect(exception.error).toBe(axiosError)
    expect(exception).toMatchSnapshot()
  })
})
