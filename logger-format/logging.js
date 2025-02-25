import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] [${level}]: ${message}`;
});

const logger = createLogger({
  level: "debug",
  format: combine(label({ label: "right meow!" }), timestamp(), myFormat),
  transports: [
    new transports.File({ filename: "./logs/combined.log" }),
    new transports.Console(),
  ],
});

export { logger };
