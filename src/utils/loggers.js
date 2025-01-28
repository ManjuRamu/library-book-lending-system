import winston from "winston";
import { ENV } from "./env.js";
const { timestamp } = winston.format;


export const logger = winston.createLogger({
    level: ENV.LOG_LEVEL,
    format: winston.format.combine(
        timestamp(),
        winston.format.json() // Ensure JSON output format
    ),
    defaultMeta: { service: `library-book-lending-system-${process.env.ENVIRONMENT ?? "dev"}` },
    transports: [new winston.transports.Console()],
})

