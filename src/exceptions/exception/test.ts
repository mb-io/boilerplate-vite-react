import { describe, it, expect } from 'vitest'
import { Exception } from './exception'

describe('Exception', () => {
  it('should create an exception with a default name and message', () => {
    const exception = new Exception()
    expect(exception.name).toBe('UnknownException')
    expect(exception.message).toBe('')
    expect(exception).toMatchSnapshot()
  })

  it('should create an exception with a custom message', () => {
    const message = 'Custom error message'
    const exception = new Exception(message)
    expect(exception.name).toBe('UnknownException')
    expect(exception.message).toBe(message)
    expect(exception).toMatchSnapshot()
  })
})
