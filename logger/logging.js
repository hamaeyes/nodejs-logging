import { createLogger, format, transports } from "winston";

/**
  error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = createLogger({
  level: "debug",
  format: format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    // debug  ~ error 중에서 error만 로그에 기록한다.
    new transports.File({ filename: "./logs/error.log", level: "error" }),
    // debug  ~ error 중에서 모든 것을 기록한다.
    new transports.File({ filename: "./logs/combined.log" }),
  ],
});

export { logger };
