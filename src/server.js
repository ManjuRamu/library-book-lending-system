import express from 'express';
import { logger, logRequest } from './utils/loggers.js';
import { ENV } from './utils/env.js';
export const app = new express();
app.use(logRequest())

app.listen(ENV.PORT, ENV.HOST, () => {
    logger.info("server is runnig", { port: ENV.PORT, host: ENV.HOST })
    logger.info(`http://${ENV.HOST}:${ENV.PORT}`)
})