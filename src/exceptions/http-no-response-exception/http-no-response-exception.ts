import { AxiosError } from 'axios'

export class HttpNoResponseException extends Error {
  error?: AxiosError

  constructor(message?: string, error?: AxiosError) {
    super(message ?? 'Server failed to respond')
    this.error = error
    this.name = 'NoResponseException'
  }
}
