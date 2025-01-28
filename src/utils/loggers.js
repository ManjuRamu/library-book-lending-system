import winston from "winston";
import { ENV } from "./env.js";
const { combine, timestamp, json, colorize, printf } = winston.format;
export const logger = winston.createLogger({
    level: ENV.LOG_LEVEL,
    format: winston.format.combine(
        timestamp(),
        winston.format.json() // Ensure JSON output format
    ),
    defaultMeta: { service: `library-book-lending-system-${process.env.ENVIRONMENT ?? "dev"}` },
    transports: [new winston.transports.Console()],
})

export function logRequest() {
    return (req, res, next) => {
        logger.info("request", { path: req.path, method: req.method, url: req.url, query: req.query, path: req.path, body: req.body })
        next()
    }
}