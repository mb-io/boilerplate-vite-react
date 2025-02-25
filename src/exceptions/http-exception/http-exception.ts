import { AxiosError } from 'axios'

export class HttpException extends Error {
  status: number
  message: string
  error?: AxiosError

  constructor(status: number, message: string, error?: AxiosError) {
    super(message)
    this.status = status
    this.message = message
    this.error = error
  }
}
