import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { axiosServiceErrorHandler } from '../axios-service-error-handler/axios-service-error-handler'

let requestCount = 0
let isThrottled = false

const resetThrottle = () => {
  requestCount = 0
  isThrottled = false
}

export interface JsonPlaceholderResponse {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const jsonPlaceholderService = () => {
  const fetch = (options?: AxiosRequestConfig): Promise<JsonPlaceholderResponse> => {
    if (isThrottled) {
      throw new Error('Too many requests. Please wait a minute before trying again.')
    }

    if (requestCount >= 2) {
      isThrottled = true
      setTimeout(resetThrottle, 60000) // 1 minute
      throw new Error('Too many requests. Please wait a minute before trying again.')
    }

    requestCount += 1

    return axios
      .get(`/todos/1`, options)
      .then((response: AxiosResponse<JsonPlaceholderResponse>) => response.data)
      .catch((error) => {
        return axiosServiceErrorHandler(error, 'Failed to fetch placeholder data')
      })
  }

  return { fetch }
}
export type JsonPlaceholderService = AxiosResponse<JsonPlaceholderResponse>
