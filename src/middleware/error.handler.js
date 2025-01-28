import { ENV } from "../config/env.js";
import { logger } from "../utils/loggers.js";

export function globalErrorHandler(err, req, res, next) {
  logger.error(err.message, { err });
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Something went wrong",
    stack: ENV.ENVIRONMENT !== "production" ? err.stack : undefined,
    ...(err?.meta ?? {}),
  });
}
