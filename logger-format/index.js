import { logger } from "./logging.js";

logger.info("포메팅된 메시지 1. .. ");
logger.info("포메팅된 메시지 2. .. ");
logger.info("포메팅된 메시지 3. .. ");
logger.info("포메팅된 메시지 4. .. ");
logger.info("포메팅된 메시지 5. .. ");

logger.log({
  level: "debug",
  message: "포메팅된 메시지 6. .. ",
});
