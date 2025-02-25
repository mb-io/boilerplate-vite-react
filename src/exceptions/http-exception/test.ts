import { describe, it, expect } from 'vitest'
import { HttpException } from './http-exception'
import { AxiosError } from 'axios'

describe('HttpException', () => {
  it('should create an exception with status and message', () => {
    const status = 400
    const message = 'Bad Request'
    const exception = new HttpException(status, message)
    expect(exception.status).toBe(status)
    expect(exception.message).toBe(message)
    expect(exception).toMatchSnapshot()
  })

  it('should create an exception with status, message, and AxiosError', () => {
    const status = 500
    const message = 'Internal Server Error'
    const axiosError = new AxiosError('Axios error message')
    const exception = new HttpException(status, message, axiosError)
    expect(exception.status).toBe(status)
    expect(exception.message).toBe(message)
    expect(exception.error).toBe(axiosError)
    expect(exception).toMatchSnapshot()
  })
})
