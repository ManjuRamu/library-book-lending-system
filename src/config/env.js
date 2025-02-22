import dotenv from "dotenv";
/*Please remove the default value.
Use for demo purpose
*/
dotenv.config();
export const ENV = Object.freeze(
  Object.seal({
    PORT: process.env.PORT ?? 3000,
    HOST: process.env.HOST ?? "localhost",
    LOG_LEVEL: process.env.LOG_LEVEL ?? "info",
    ENVIRONMENT: process.env.ENVIRONMENT ?? "dev",
    LOG_REQUEST: process.env.LOG_REQUEST ?? "YES",
  }),
);
