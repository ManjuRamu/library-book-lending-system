import express from 'express';
import { logger } from './utils/loggers.js';
import { ENV } from './utils/env.js';
import { logRequest } from './middleware/logs.js';
import  router  from './routes/index.js';
import { globalErrorHandler } from './middleware/error.handler.js';
export const app = new express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logRequest(ENV.LOG_REQUEST))
app.use("/api/v1",router)
app.use(globalErrorHandler)
app.listen(ENV.PORT, ENV.HOST, () => {
    logger.info("server is runnig", { port: ENV.PORT, host: ENV.HOST })
    logger.info(`http://${ENV.HOST}:${ENV.PORT}`)
})