
import { createLogger, format, transports }  from 'winston';
const { combine, timestamp, label, printf } = format;

/**
  error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = createLogger({
  level: 'debug',
  format: format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    // debug  ~ error 중에서 error만 로그에 기록한다.
    new transports.File({ filename: './logs/error.log', level: 'error' }),
    // debug  ~ error 중에서 모든 것을 기록한다. 
    new transports.File({ filename: './logs/combined.log' }),
  ],
});

// 프로덕션이 아니면 콘솔 로그에도 출력한다. 
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple(),
  }));
}


const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const formatLogger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [new transports.File({ filename: './logs/combined.log' }),]
});

export {logger, formatLogger};
