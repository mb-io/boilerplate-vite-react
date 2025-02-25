import { AxiosError } from 'axios'

import { Exception } from '@/exceptions/exception/exception'
import { Http403Exception } from '@/exceptions/http-403-exception/http-403-exception'
import { Http404Exception } from '@/exceptions/http-404-exception/http-404-exception'
import { Http500Exception } from '@/exceptions/http-500-exception/http-500-exception'
import { HttpException } from '@/exceptions/http-exception/http-exception'
import { HttpNoResponseException } from '@/exceptions/http-no-response-exception/http-no-response-exception'

export const axiosServiceErrorHandler = (error: AxiosError, message?: string) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const status = error.response.status

    switch (true) {
      case status === 404:
        throw new Http404Exception(message, error)
      case status === 403:
        throw new Http403Exception(message, error)
      case status >= 500 && status <= 599:
        throw new Http500Exception(error.message, error)
      default:
        throw new HttpException(error.response.status, error.message, error)
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    throw new HttpNoResponseException(error.message)
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Exception(error.message)
  }
}
