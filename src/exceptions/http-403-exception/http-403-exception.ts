import { AxiosError } from 'axios'

import { HttpException } from '../http-exception/http-exception'

export class Http403Exception extends HttpException {
  constructor(message?: string, error?: AxiosError) {
    super(403, message ?? 'Not Authorized', error)
  }
}
