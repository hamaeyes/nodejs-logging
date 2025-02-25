import winston from "winston";

const transports = {
  console: new winston.transports.Console({ level: "warn" }),
  file: new winston.transports.File({
    filename: "./logs/combined.log",
    level: "error",
  }),
};

const logger = winston.createLogger({
  transports: [transports.console, transports.file],
});

logger.info("Will not be logged in either transport!");
transports.console.level = "error";
transports.file.level = "info";
logger.error("Will be logged in both transports!");
