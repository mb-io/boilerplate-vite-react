import { describe, it, expect } from 'vitest'
import { AxiosError, AxiosHeaders } from 'axios'
import { axiosServiceErrorHandler } from './axios-service-error-handler'
import { Http403Exception } from '@/exceptions/http-403-exception/http-403-exception'
import { Http404Exception } from '@/exceptions/http-404-exception/http-404-exception'
import { Http500Exception } from '@/exceptions/http-500-exception/http-500-exception'
import { HttpException } from '@/exceptions/http-exception/http-exception'
import { Exception } from '@/exceptions/exception/exception'

describe('axiosServiceErrorHandler', () => {
  it('should throw Http404Exception for 404 status', () => {
    const error = new AxiosError('Not Found', undefined, undefined, undefined, {
      status: 404,
      data: {},
      headers: {},
      statusText: 'Not Found',
      config: {
        headers: {} as AxiosHeaders
      }
    })
    expect(() => axiosServiceErrorHandler(error)).toThrow(Http404Exception)
    expect(() => axiosServiceErrorHandler(error)).toMatchSnapshot()
  })

  it('should throw Http403Exception for 403 status', () => {
    const error = new AxiosError('Not Authorized', undefined, undefined, undefined, {
      status: 403,
      data: {},
      headers: {},
      statusText: 'Not Authorized',
      config: {
        headers: {} as AxiosHeaders
      }
    })
    expect(() => axiosServiceErrorHandler(error)).toThrow(Http403Exception)
    expect(() => axiosServiceErrorHandler(error)).toMatchSnapshot()
  })

  it('should throw Http500Exception for 500 status', () => {
    const error = new AxiosError('Internal Server Error', undefined, undefined, undefined, {
      status: 500,
      data: {},
      headers: {},
      statusText: 'Internal Server Error',
      config: {
        headers: {} as AxiosHeaders
      }
    })
    expect(() => axiosServiceErrorHandler(error)).toThrow(Http500Exception)
    expect(() => axiosServiceErrorHandler(error)).toMatchSnapshot()
  })

  it('should throw HttpException for other status', () => {
    const error = new AxiosError('Bad Request', undefined, undefined, undefined, {
      status: 400,
      data: {},
      headers: {},
      statusText: 'Bad Request',
      config: {
        headers: {} as AxiosHeaders
      }
    })
    expect(() => axiosServiceErrorHandler(error)).toThrow(HttpException)
    expect(() => axiosServiceErrorHandler(error)).toMatchSnapshot()
  })

  it('should throw Exception for other errors', () => {
    const error = new AxiosError('Unknown Error')
    expect(() => axiosServiceErrorHandler(error)).toThrow(Exception)
    expect(() => axiosServiceErrorHandler(error)).toMatchSnapshot()
  })
})
