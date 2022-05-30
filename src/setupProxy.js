//react와 node 서버 간 데이터를 주고 받기 위한 프록시 모듈
//클라이언트와 서버 사이의 네트워크 통신을 대리로 수행하는 미들웨어
// /api -> 프록시를 사용할 경로 + target -> 프록시로 이용할 서버 주소
// /api로 시작되는 요청은 target으로 설정된 서버를 사용
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
