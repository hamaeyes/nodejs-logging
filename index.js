import {logger, formatLogger} from "./logging.js"; 

// 간단한 파일 로깅 방법 
// logger.info(" INFO Log ");
// logger.debug(" DEBUG Log ");
// logger.error(" ERROR Log ");
// logger.silly(" SILLY Log ");


// 자식 로거 생성하기 
// logger.info("USER-U00000501 로그인을 성공했습니다.");
// const childLogger = logger.child({ requestId: 'USER-U00000501' });
// childLogger.info("홈>글 목록을 조회합니다.");
// childLogger.info("홈>글 상세를 조회합니다.");
// childLogger.info("장바구니에 상품을 담았습니다.");
// childLogger.error("쿠폰 조회를 시도하다가 알수 없는 오류가 발생했습니다.");
 

formatLogger.info("포메팅된 메시지 .. ")