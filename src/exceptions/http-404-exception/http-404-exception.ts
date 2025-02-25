import { AxiosError } from 'axios'

import { HttpException } from '../http-exception/http-exception'

export class Http404Exception extends HttpException {
  constructor(message?: string, error?: AxiosError) {
    super(404, message ?? 'Not Found', error)
  }
}
