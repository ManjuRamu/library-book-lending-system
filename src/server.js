import express from "express";
import { logger } from "./utils/loggers.js";
import { ENV } from "./config/env.js";
import { logRequest } from "./middleware/logs.js";
import router from "./routes/index.js";
import { globalErrorHandler } from "./middleware/error.handler.js";
import cors from "cors";
import helmet from "helmet";
export const app = new express();
app.use(helmet());
app.use(
  cors({
    origin: "*", //change it based on you domain,
    methods: ["GET", "POST", "PATCH", "DELETE","OPTIONS"],
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("", (req, res) => {
  res.status(200).send({ message: "server is healthy" });
});

app.use(logRequest(ENV.LOG_REQUEST));
app.use("/api/v1", router);
app.use(globalErrorHandler);

app.listen(ENV.PORT, ENV.HOST, () => {
  logger.info("server is runnig", { port: ENV.PORT, host: ENV.HOST });
  logger.info(`http://${ENV.HOST}:${ENV.PORT}`);
});
