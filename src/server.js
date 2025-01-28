import express from 'express';
import { logger } from './utils/loggers.js';
import { ENV } from './utils/env.js';
import { logRequest } from './middleware/logs.js';
export const app = new express();
app.use(logRequest(ENV.LOG_REQUEST))

app.listen(ENV.PORT, ENV.HOST, () => {
    logger.info("server is runnig", { port: ENV.PORT, host: ENV.HOST })
    logger.info(`http://${ENV.HOST}:${ENV.PORT}`)
})