export class ApiError extends Error {
  constructor(message, statusCode = 500, meta = {}) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    this.meta = meta;
  }
}

export class BadRequest extends ApiError {
  constructor(message, meta) {
    super(message, 404, meta);
  }
}
