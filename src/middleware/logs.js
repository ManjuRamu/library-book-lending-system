import { v4 as uuidv4 } from 'uuid';
import { logger } from '../utils/loggers.js';
export function logRequest() {
    return (req, res, next) => {
        const requestId = uuidv4().toString();
        res.setHeader("X-Request-Id",requestId)
        logger.defaultMeta = {...logger.defaultMeta, requestId }
        logger.info("request", { path: req.path, method: req.method, url: req.url, query: req.query, path: req.path, body: req.body })
        next()
    }
}