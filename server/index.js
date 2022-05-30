const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//서버에서 환경 변수를 사용하기 위한 dotenv
require("dotenv").config({ path: __dirname + "/./../.env" });

//CORS
const cors = require("cors");

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS 허용
let corsOptions = {
  origin: "https://openapi.naver.com",
  credentials: true,
};
app.use(cors(corsOptions));

const parsing = require("./fetching.js");

app.get("/", (req, res) => {
  res.send("running");
});

//get 요청이 들어오면
//parsing 실행
//요청 결과값을 client로 보내기
app.get("/api/rank", (req, res) => {
  parsing().then((response) => {
    res.send(response);
  });
});

app.listen(port, () => {
  console.log(`app listning on port ${port}`);
});
