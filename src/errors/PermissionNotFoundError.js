/*
 * Embassy
 * Copyright (c) 2017 Tom Shawver LLC
 */

'use strict'

/**
 * Thrown when Token fails to parse a string token passed to its constructor. Sets a
 * 'status' property to 403 so this error can be treated as an HTTP error for convenience.
 */
class PermissionNotFoundError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.status = 403
    Error.captureStackTrace(this, this.constructor.name)
  }
}

module.exports = PermissionNotFoundError
