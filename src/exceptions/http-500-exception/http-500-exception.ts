import { AxiosError } from 'axios'

import { HttpException } from '../http-exception/http-exception'

export class Http500Exception extends HttpException {
  constructor(message?: string, error?: AxiosError) {
    super(500, message ?? 'Internal Server Error', error)
  }
}
